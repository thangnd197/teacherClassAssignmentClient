import React from 'react';
import {convertListWeeksToString} from '../utils.js';
import ModalVisualize from './modal/ModalVisualize';
import ModalStatistic from './modal/ModalStatistic';


class DetailSolution extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      solution: props.solution,
      input: props.input,
      class: []
    }
    this.convertListWeeksToString = convertListWeeksToString;
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    
    fetch(
      'http://localhost:8080/input/' + this.state.input.id +'/invalidClass'
    ).then(
      res => {
        return res.json();
      }
    ).then(
      (res) => {
        res.forEach(element => {
          element.jsonClass = JSON.parse(element.jsonClass);
        });
        this.setState({class: res});
      }
    );   
  }

  contentTable() {

    var content = [];

    for (var i in this.state.solution.jsonSolution.assignments) {
      var assignment = this.state.solution.jsonSolution.assignments[i];
      for (var j in assignment.assignedClasses) {
        var theClass = assignment.assignedClasses[j];
        const tmp = 
          <tr key={assignment.teacher.code + '-' + theClass.code + theClass.course.type} className="row-table">
            <td>{assignment.teacher.name}</td>
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
    
    if (this.state.class.length === 0) return content;

    for (var i in this.state.class) {
      var theClass = this.state.class[i].jsonClass;

      var str = "";
      if (this.state.class[i].isConflict === 1) {
        str = "class has non teacher";
      }
      if (this.state.class[i].isNonTeacher === 1) {
        str = "conflict with another class";
      }

      if ((this.state.class[i].isConflict === 1) && (this.state.class[i].isNonTeacher === 1)) {
        str = "conflict and has non teacher";
      }

      const tmp = 
          <tr key={theClass.code + theClass.course.type} className="row-table">
            <td>{str}</td>
            <td>{str}</td>
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