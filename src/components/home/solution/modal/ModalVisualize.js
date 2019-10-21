import React from 'react'
import NumClassBarChart from './NumClassBarChart';
import NumCreditBarChart from './NumCreditBarChart';
import NumClassHorizonBarChart from './NumClassHorizonBarChart';

class ModalVisualize extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      solution: props.solution
    };
  }

  render() {
  return (
    <div>
      <div className="modal" id="modalVisualize">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
              <div className="modal-body">
                <NumClassBarChart solution={this.state.solution}/><hr/>
                <NumCreditBarChart solution={this.state.solution}/><hr/><hr/>
                <NumClassHorizonBarChart solution={this.state.solution}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default ModalVisualize;