import React from 'react'

class ModalSolution extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      input_id: props.input_id,
      tabulen: 1,
      maxTime: 1,
      maxIter: 1,
      maxStable: 1
    };

    this.forceUpdateSolutions = props.fetchData;

    this.handleCreateNew = this.handleCreateNew.bind(this);
    this.handleIterChange = this.handleIterChange.bind(this);
    this.handleStableChange = this.handleStableChange.bind(this);
    this.handleTabulenChange = this.handleTabulenChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleCreateNew(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('tabulen', this.state.tabulen);
    formData.append('maxTime', this.state.maxTime);
    formData.append('maxIter', this.state.maxIter);
    formData.append('maxStable', this.state.maxStable);
  
    fetch(
      'http://localhost:8080/input/' + this.state.input_id + '/parameter',
      {
        method: 'POST',
        body: formData
      }
    ).then(
      res => {
        return res.json();
      }
    ).then(
      (res) => {
        this.sendSolvingRequest(res);
      }
    );
    window.$('#exampleModal').modal('hide');
  }

  sendSolvingRequest(parameter_id) {
    const formData = new FormData();
    formData.append('inputRequestId', this.state.input_id);
    formData.append('parameterId', parameter_id);

    fetch(
      'http://localhost:8080/user/' + 1 + '/solve',
      {
        method: 'POST',
        body: formData
      }
    ).then((res) => {
      console.log(res);
      this.forceUpdateSolutions();
    });
  }

  handleIterChange(e) {
    this.setState({"maxIter": e.target.value});
  }

  handleStableChange(e) {
    this.setState({"maxStable": e.target.value});
  }

  handleTabulenChange(e) {
    this.setState({"tabulen": e.target.value});
  }

  handleTimeChange(e) {
    this.setState({"maxTime": e.target.value});
  }

  render() {
  return (
    <div>
      <div className="modal" id="exampleModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.handleCreateNew}>
              <div className="modal-body">
                <input type="number" id="max_time" className="form-control" placeholder="max time" required autoFocus
                  value={this.state.maxTime}
                  onChange={this.handleTimeChange}/>
                <input type="number" id="max_iter" className="form-control" placeholder="max iteration" required autoFocus
                  value={this.state.maxIter}
                  onChange={this.handleIterChange}/>
                <input type="number" id="tabulen" className="form-control" placeholder="tabulen" required autoFocus
                  value={this.state.tabulen}
                  onChange={this.handleTabulenChange}/>
                <input type="number" id="max_stable" className="form-control" placeholder="max stable" required autoFocus
                  value={this.state.maxStable}
                  onChange={this.handleStableChange}/>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" >Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default ModalSolution;