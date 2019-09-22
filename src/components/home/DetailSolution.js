import React from 'react';
import {convertListWeeksToString} from './utils.js';

class DetailSolution extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input_id: props.input_id,
      solution: props.solution
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
          <tr key={assignment.teacher.teacherCode + '-' + theClass.classCode} className="row-table">
            <td>{assignment.teacher.teacherName}</td>
            <td>{assignment.teacher.teacherCode}</td>
            <td>{theClass.classCode}</td>
            <td>{theClass.course.courseCode}</td>
            <td>{theClass.course.courseName}</td>
            <td>{theClass.course.credit}</td>
            <td>{theClass.timetable.map((t) => t.startTime + "-" + t.endTime + "; ")}</td>
            <td>{theClass.timetable.map((t) => this.convertListWeeksToString(t.weeks) + "; ")}</td>
            <td>{theClass.timetable.map((t) => t.location + "; ")}</td>
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
      </div>
    )
  }
}

export default DetailSolution;