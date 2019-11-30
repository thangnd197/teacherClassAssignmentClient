import React from 'react'

class ModalManualSolution extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      input_id: props.input_id,
      manualSolution: ""
    };

    this.handleManualSolutionChange = this.handleManualSolutionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('solution', this.state.manualSolution);
    formData.append('inputRequestId', this.state.input_id);
    fetch(
      'http://localhost:8080/user/1/addManual',
      {
        method: 'POST',
        body: formData
      }
    ).then(

    );

    window.$('#modalAddManualSolution').modal('hide');
  }

  handleManualSolutionChange(e) {
    this.setState({"manualSolution": e.target.files[0]});
  }

  render() {
  return (
    <div>
        <div className="modal" id="modalAddManualSolution">
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add manual solution from Excel</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="modal-body">
                <div>
                  <h5>Manual solution</h5>
                  <input type="file" id="class_list_input" className="form-control" placeholder="Class list" required autoFocus 
                    onChange={this.handleManualSolutionChange}/>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" >Submit</button>
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

export default ModalManualSolution;