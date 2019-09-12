import React from 'react';
class Classes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: props.input
    }
    console.log(this.state.input);
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
        <tr key={theClass.classCode} className="row-table">
          <td>{theClass.classCode}</td>
          <td>{theClass.course.courseCode}</td>
          <td>{theClass.course.courseName}</td>
          <td>{theClass.timetable[0].startTime + "-" + theClass.timetable[0].endTime}</td>
          <td>{theClass.timetable[0].weeks}</td>
          <td>{theClass.timetable[0].weeks}</td>
        </tr>
    );
  }

  render() {
    return (
      <div>           
        <table className="table">
          <thead>
            <tr>
              <th>Mã lớp</th>
              <th>Mã HP</th>
              <th>Tên lớp</th>
              <th>Giờ học</th>
              <th>Tuần học</th>
              <th>Tuần học</th>
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