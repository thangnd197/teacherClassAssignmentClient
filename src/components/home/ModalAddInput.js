import React from 'react';

class ModalAddInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
      classList: '',
      courseForTeacherList: ''
    }

    this.handleInputNameChange = this.handleInputNameChange.bind(this);
    this.handleClassListChange = this.handleClassListChange.bind(this);
    this.handleCourseForTeacherListChange = this.handleCourseForTeacherListChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputNameChange(e) {
    this.setState({"inputName": e.target.value});
  }

  handleClassListChange(e) {
    this.setState({"classList": e.target.files[0]});
  }

  handleCourseForTeacherListChange(e) {
    this.setState({"courseForTeacherList": e.target.files[0]});
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append('name', this.state.inputName);
    formData.append('classList', this.state.classList);
    formData.append('courseForTeacherList', this.state.courseForTeacherList);

    fetch(
      'http://localhost:8080/user/1/inputs/excel',
      {
        method: 'POST',
        body: formData
      }
    ).then(
      res => {
        return res.json();
      }
    ).then();

    window.$('#modalAddInput').modal('hide');
  }

  render() {
    return (
      <div>
        <div className="modal" id="modalAddInput">
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add input from Excel</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="modal-body">
                <input type="text" id="input_name_input" className="form-control" placeholder="Input name" required autoFocus
                  value={this.state.inputName}
                  onChange={this.handleInputNameChange}/>
                <input type="file" id="class_list_input" className="form-control" placeholder="Class list" required autoFocus
                  onChange={this.handleClassListChange}/>
                <input type="file" id="course_for_teacher_input" className="form-control" placeholder="Course for teacher list" required autoFocus
                  onChange={this.handleCourseForTeacherListChange}/>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" >Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default ModalAddInput;