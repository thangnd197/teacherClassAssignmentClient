import React from 'react';
class Course4teacher extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: props.input
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.input.id !== prevState.input.id) {
      return ({ input: nextProps.input }); // <- this is setState equivalent
    }
    return prevState;
  }

  contentTable() {

    var content = [];

    for (var i in this.state.input.jsonInput.teachers) {
      var teacher = this.state.input.jsonInput.teachers[i];
      for (var j in teacher.courses) {
        var course = teacher.courses[j];
        const tmp = 
          <tr key={teacher.code + '-' + course.code + '-' + course.type} className="row-table">
            <td>{teacher.name}</td>
            <td>{teacher.code}</td>
            <td>{course.code}</td>
            <td>{course.type}</td>
            <td>{course.name}</td>
            <td>{course.priority}</td>
          </tr>;
        content.push(tmp);
      }
    }
    return content;
  }

  render() {

    return (
      <div className="scroll-space-app">           
        <table className="table">
          <thead>
            <tr>
              <th>Giảng viên</th>
              <th>Email</th>
              <th>Mã HP</th>
              <th>Loại lớp</th>
              <th>Tên HP</th>
              <th>Trọng số</th>
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

export default Course4teacher;