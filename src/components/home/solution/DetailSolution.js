import React from 'react';
import {convertListWeeksToString} from '../utils.js';
import ModalVisualize from './modal/ModalVisualize';
import ModalStatistic from './modal/ModalStatistic';


class DetailSolution extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      solution: props.solution,
      input: props.input
    }
    this.convertListWeeksToString = convertListWeeksToString;
  }

  contentTable() {

    var content = [];

    for (var i in this.state.solution.jsonSolution.assignments) {
      var assignment = this.state.solution.jsonSolution.assignments[i];
      for (var j in assignment.assignedClasses) {
        var theClass = assignment.assignedClasses[j];
        const tmp = 
          <tr key={assignment.teacher.code + '-' + theClass.code + theClass.course.type} className="row-table">
            <td>{assignment.teacher.code}</td>
            <td>{assignment.teacher.code}</td>
            <td>{theClass.code}</td>
            <td>{theClass.course.code}</td>
            <td>{theClass.course.type}</td>
            <td>{theClass.course.name}</td>
            <td>{theClass.credit}</td>
            <td>{theClass.timeTable.map((t) => t.startTime + "-" + t.endTime + "; ")}</td>
            <td>{theClass.timeTable.map((t) => this.convertListWeeksToString(t.weeks) + "; ")}</td>
            <td>{theClass.timeTable.map((t) => t.location + "; ")}</td>
          </tr>;
        content.push(tmp);
      }
    }
    return content;
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Giảng viên</th>
              <th>Email</th>
              <th>Mã Lớp</th>
              <th>Mã HP</th>
              <th>Loại lớp</th>
              <th>Tên HP</th>
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
        <ModalVisualize solution={this.state.solution}/>
        <ModalStatistic solution={this.state.solution} input={this.state.input}/>
      </div>
    )
  }
}

export default DetailSolution;