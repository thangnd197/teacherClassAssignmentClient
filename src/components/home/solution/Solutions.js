import React from 'react';
import ModalSolution from './modal/ModalSolution';

class Solutions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      solutions: [],
      // parameters: [],
      input: props.input
    }
    this.changeDetailSolution = this.props.changeDetailSolution;
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    
    fetch(
      'http://localhost:8080/input/' + this.state.input.id +'/solution'
    ).then(
      res => {
        return res.json();
      }
    ).then(
      (res) => {
        res.forEach(element => {
          element.jsonSolution = JSON.parse(element.jsonSolution);
        });
        this.setState({solutions: res});
      }
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.input.id !== prevState.input.id) {
      return ({ input: nextProps.input }); // <- this is setState equivalent
    }
    return prevState;
  }

  handleClickStatus(solution_id) {

    this.state.solutions.forEach(element => {
      if (element.id === solution_id) {
        this.changeDetailSolution("detail", element);
        return;
      }
    }); 
  }

  contentTable() {
    return this.state.solutions.map(
      (s) =>
        <tr key={s.parameterModel.id} className="row-table">
          <td>{s.parameterModel.id}</td>
          <td>{s.parameterModel.tabulen}</td>
          <td>{s.parameterModel.maxTime}</td>
          <td>{s.parameterModel.maxIter}</td>
          <td>{s.parameterModel.maxStable}</td>
          <td>
            <button className={this.convertStatusSolver(s.solverStatus)} onClick={() => this.handleClickStatus(s.id)}>
              {this.convertStatusSolver(s.solverStatus)}
            </button>
          </td>
        </tr>
    );
  }

  convertStatusSolver(s) {
    switch(s) {
      case 0: return "solving";
      case 1: return "solved";
      case 2: return "modified";
      default: return "unknown";
    }
  }

  render() {
    return (
      <div>
        <form method="GET" id="my_form"></form>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>tabulen</th>
              <th>max time</th>
              <th>max iteration</th>
              <th>max stable</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.contentTable()}
          </tbody>
        </table>

        <ModalSolution 
          input_id={this.state.input.id}
          fetchData={this.fetchData}/>
      </div>
    )
  }
}

export default Solutions;