import React from 'react';
import {convertListWeeksToString} from './utils.js';
class Classes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: props.input
    }
    this.convertListWeeksToString = convertListWeeksToString;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.input.id !== prevState.input.id) {
      return ({ input: nextProps.input }); // <- this is setState equivalent
    }
    return prevState;
  }

  contentTable() {

    return this.state.input.jsonInput.classes.map(
      (theClass) =>
        <tr key={theClass.code + "-" + theClass.course.type} className="row-table">
          <td>{theClass.code}</td>
          <td>{theClass.course.code}</td>
          <td>{theClass.course.name}</td>
          <td>{theClass.course.type}</td>
          <td>{theClass.credit}</td>
          <td>{theClass.timeTable.map((t) => t.startTime + "-" + t.endTime + "; ")}</td>
          <td>{theClass.timeTable.map((t) => this.convertListWeeksToString(t.weeks) + "; ")}</td>
          <td>{theClass.timeTable.map((t) => t.location + "; ")}</td>
        </tr>
    );
  }

  render() {
    return (
      <div className="scroll-space-app">           
        <table className="table">
          <thead>
            <tr>
              <th>Mã lớp</th>
              <th>Mã HP</th>
              <th>Tên lớp</th>
              <th>Loại lớp</th>
              <th>Số tín</th>
              <th>Giờ học</th>
              <th>Tuần học</th>
              <th>Phòng</th>
            </tr>
          </thead>
          <tbody>
            {this.contentTable()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Classes;