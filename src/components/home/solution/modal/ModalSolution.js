import React from 'react'

class ModalSolution extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      target: 10,

      input_id: props.input_id,
      tabulen: 100,
      maxTime: 99999,
      maxIter: 1000,
      maxStable: 100,

      tabulenPriority: 0,
      maxIterPriority: 300,
      maxStablePriority: 100,

      tabulenBalance: 50,
      maxIterBalance: 300,
      maxStableBalance: 100,
      
      isCombine: "1"
    };

    this.forceUpdateSolutions = props.fetchData;

    this.handleCreateNew = this.handleCreateNew.bind(this);
    this.handleIterChange = this.handleIterChange.bind(this);
    this.handleStableChange = this.handleStableChange.bind(this);
    this.handleTabulenChange = this.handleTabulenChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleTargetChange = this.handleTargetChange.bind(this);

    this.handleIterChangePriority = this.handleIterChangePriority.bind(this);
    this.handleStableChangePriority = this.handleStableChangePriority.bind(this);
    this.handleTabulenChangePriority = this.handleTabulenChangePriority.bind(this);

    this.handleIterChangeBalance = this.handleIterChangeBalance.bind(this);
    this.handleStableChangeBalance = this.handleStableChangeBalance.bind(this);
    this.handleTabulenChangeBalance = this.handleTabulenChangeBalance.bind(this);
  }

  handleCreateNew(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('tabulen', this.state.tabulen);
    formData.append('maxTime', this.state.maxTime);
    formData.append('maxIter', this.state.maxIter);
    formData.append('maxStable', this.state.maxStable);

    formData.append('tabulenPriority', this.state.tabulenPriority);
    formData.append('maxIterPriority', this.state.maxIterPriority);
    formData.append('maxStablePriority', this.state.maxStablePriority);

    formData.append('tabulenBalance', this.state.tabulenBalance);
    formData.append('maxIterBalance', this.state.maxIterBalance);
    formData.append('maxStableBalance', this.state.maxStableBalance);

    formData.append('isCombine', parseInt(this.state.isCombine));
    formData.append('target', parseInt(this.state.target));
  
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

  handleOptionChange(changeEvent) {
    this.setState({
      isCombine: changeEvent.target.value
    });
  }

  handleTargetChange(e) {
    this.setState({"target": e.target.value});
  }

  //
  handleIterChangePriority(e) {
    this.setState({"maxIterPriority": e.target.value});
  }

  handleStableChangePriority(e) {
    this.setState({"maxStablePriority": e.target.value});
  }

  handleTabulenChangePriority(e) {
    this.setState({"tabulenPriority": e.target.value});
  }
  //
  handleIterChangeBalance(e) {
    this.setState({"maxIterBalance": e.target.value});
  }

  handleStableChangeBalance(e) {
    this.setState({"maxStableBalance": e.target.value});
  }

  handleTabulenChangeBalance(e) {
    this.setState({"tabulenBalance": e.target.value});
  }

  render() {
  return (
    <div>
      <div className="modal" id="exampleModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">parameter for create new solution</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.handleCreateNew}>
              <div className="modal-body">
                <h6>Target credit</h6>
                <input type="number" id="target" className="form-control" placeholder="target credit" required autoFocus
                  value={this.state.target}
                  onChange={this.handleTargetChange}/>

                <h6>Max time</h6>
                <input type="number" id="max_time" className="form-control" placeholder="max time" required autoFocus
                  value={this.state.maxTime}
                  onChange={this.handleTimeChange}/>
                <h6>Max iteration</h6>
                <input type="number" id="max_iter" className="form-control" placeholder="max iteration" required
                  value={this.state.maxIter}
                  onChange={this.handleIterChange}/>
                <h6>Tabu length</h6>
                <input type="number" id="tabulen" className="form-control" placeholder="tabulen" required
                  value={this.state.tabulen}
                  onChange={this.handleTabulenChange}/>
                <h6>Max stable</h6>
                <input type="number" id="max_stable" className="form-control" placeholder="max stable" required
                  value={this.state.maxStable}
                  onChange={this.handleStableChange}/>
                <div className="row">
                  <div className="col-md-4"><input type="radio" name="isCombine" value="1" 
                    checked={this.state.isCombine === "1"}
                    onChange={this.handleOptionChange}/>
                    Combine
                  </div>
                  <div className="col-md-4"><input type="radio" name="isCombine" value="0"
                    checked={this.state.isCombine === "0"}
                    onChange={this.handleOptionChange}/>
                    Discrete
                  </div>
                </div>
                { this.state.isCombine === "0"?
                <div>
                  <h6>Max iteration priority</h6>
                  <input type="number" id="max_iter_p" className="form-control" placeholder="max iteration" required
                    value={this.state.maxIterPriority}
                    onChange={this.handleIterChangePriority}/>
                  <h6>Tabu length priority</h6>
                  <input type="number" id="tabulen_p" className="form-control" placeholder="tabulen" required
                    value={this.state.tabulenPriority}
                    onChange={this.handleTabulenChangePriority}/>
                  <h6>Max stable priority</h6>
                  <input type="number" id="max_stable_p" className="form-control" placeholder="max stable" required
                    value={this.state.maxStablePriority}
                    onChange={this.handleStableChangePriority}/>
                </div>
                : null
                }
                <h6>Max iteration balance</h6>
                <input type="number" id="max_iter_b" className="form-control" placeholder="max iteration" required
                  value={this.state.maxIterBalance}
                  onChange={this.handleIterChangeBalance}/>
                <h6>Tabu length balance</h6>
                <input type="number" id="tabulen_b" className="form-control" placeholder="tabulen" required
                  value={this.state.tabulenBalance}
                  onChange={this.handleTabulenChangeBalance}/>
                <h6>Max stable balance</h6>
                <input type="number" id="max_stable_b" className="form-control" placeholder="max stable" required
                  value={this.state.maxStableBalance}
                  onChange={this.handleStableChangeBalance}/>
                

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