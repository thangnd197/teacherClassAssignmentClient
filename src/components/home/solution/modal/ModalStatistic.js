import React from 'react'

class ModalStatistic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      solution: props.solution,
      input: props.input,
      checker: ''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      'http://localhost:8080/input/' + this.state.input.id +'/checker/' + this.state.solution.id
    ).then(
      res => {
        return res.json();
      }
    ).then(
      (res) => {
        this.setState({checker: res});
        console.log(this.state.checker);
      }
    );
  }

  listTeacherConflictTime() {
    if (this.state.checker.failConflicts.length === 0) {
      return <div>Không có</div>
    } else {
      var content = [];
      for (var i in this.state.checker.failConflicts) {
        var element = this.state.checker.failConflicts[i];
        var temp = <div key={element.teacher.code}>{element.teacher.code}</div>;
        content.push(temp);
      }
      
      return content;
    }
  }

  render() {
    if (this.state.checker === '') {
      return (
        <div>a</div>
      )
    }

    return (
      <div>
        <div className="modal" id="modalStatistic">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.handleCreateNew}>
                <div className="modal-body">
                  <div><b>Số cặp lớp trùng lịch</b>: {this.state.checker.conflictClassPairs.length}</div>
                  <div><b>Giảng viên bị trùng lịch</b>:</div>
                  {this.listTeacherConflictTime()}
                  <div><b>Số lớp phân không đúng chuyên môn</b>: {this.state.checker.failPossibles.length}</div>
                  <div><b>Số giảng viên bị phân vượt số tín chỉ</b>: {this.state.checker.failMaxCredits.length}</div>
                  <div><b>Số lớp bị phân nhiều hơn 1 giảng viên</b>: {this.state.checker.moreOneTeacherClasses.length}</div>
                  <div><b>Số lớp không được phân giảng viên: </b>: {this.state.checker.noAssignedClasses.length}</div>
                  <div><b>Tổng độ phù hợp: </b>: {this.state.checker.sumPriority}</div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalStatistic;