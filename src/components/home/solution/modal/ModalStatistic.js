import React from 'react'

class ModalStatistic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
                zum ba
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