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
      for (var key in teacher.listCourseCodes) {
        const tmp = 
          <tr key={teacher.teacherCode + '-' + key} className="row-table">
            <td>{teacher.teacherName}</td>
            <td>{teacher.teacherCode}</td>
            <td>{key}</td>
            <td>{teacher.listCourseNames[key]}</td>
            <td>{teacher.listCourseCodes[key]}</td>
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
              <th>Mã HP</th>
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