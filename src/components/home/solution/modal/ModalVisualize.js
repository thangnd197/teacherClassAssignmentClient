import React from 'react'
import NumClassBarChart from './NumClassBarChart';
import NumCreditBarChart from './NumCreditBarChart';
import NumClassHorizonBarChart from './NumClassHorizonBarChart';

class ModalVisualize extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      solution: props.solution,
      graph: 1,
      modal_title: "Histogram - Number of class per teacher"
    };
    this.handleOnClickGraphTo1 = this.handleOnClickGraphTo1.bind(this);
    this.handleOnClickGraphTo2 = this.handleOnClickGraphTo2.bind(this);
    this.handleOnClickGraphTo3 = this.handleOnClickGraphTo3.bind(this);
  }

  handleOnClickGraphTo1(e) {
    this.setState({"graph": 1, "modal_title": "Histogram - Number of class per teacher"});
    console.log(this.state.graph);
  }

  handleOnClickGraphTo2(e) {
    this.setState({"graph": 2, "modal_title": "Histogram - Number of credit per teacher"});
    console.log(this.state.graph);
  }

  handleOnClickGraphTo3(e) {
    this.setState({"graph": 3, "modal_title": "Count Bar - Number of credit per teacher"});
    console.log(this.state.graph);
  }

  genGraph() {
    switch (this.state.graph) {
      case 2:
        return <NumCreditBarChart solution={this.state.solution}/>;
      case 3:
        return <NumClassHorizonBarChart solution={this.state.solution}/>;
      default:
        return <NumClassBarChart solution={this.state.solution}/>;
    }    
  }

  render() {
  return (
    <div>
      <div className="modal" id="modalVisualize">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.state.modal_title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
              <div className="modal-body">
                <button className="btn btn-info nav-button" onClick={this.handleOnClickGraphTo1}>His Class/Teacher</button>
                <button className="btn btn-info nav-button" onClick={this.handleOnClickGraphTo2}>His Credit/Teacher</button>
                <button className="btn btn-info nav-button" onClick={this.handleOnClickGraphTo3}>No Credit/Teacher</button>
                
                {this.genGraph()}
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