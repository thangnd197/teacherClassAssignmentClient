import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.typeNavBar,
      solution: this.props.solution,
      input: this.props.input
    }
    this.handleClickDownload = this.handleClickDownload.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.typeNavBar !== prevState.type) {
      return ({ type: nextProps.typeNavBar, solution: nextProps.solution}); // <- this is setState equivalent
    }
    return prevState;
  }

  handleClickDownload() {
    window.open('http://localhost:8080/input/' + this.state.input.id + '/solution/excel/' + this.state.solution.id);
  }

  switchRender() {
    switch (this.state.type) {
      case 'list':
        return (
        <div>
          <button id="create-btn" type="button" className="btn btn-primary nav-button" data-toggle="modal" data-target="#exampleModal">
            creat new
          </button>

          <button id="create-btn" type="button" className="btn btn-primary nav-button" data-toggle="modal" data-target="#modalAddManualSolution">
            add manual
          </button>
        </div>
        );
      case 'detail':
        return (
        <div>
          <button id="sta-btn" type="button" className="btn btn-primary nav-button" data-toggle="modal" data-target="#modalStatistic">
            statistic
          </button>
          <button id="vis-btn" type="button" className="btn btn-primary nav-button" data-toggle="modal" data-target="#modalVisualize">
            visualize
          </button>
          <button id="download-btn" type="button" className="btn btn-primary nav-button" onClick={this.handleClickDownload}>
            download
          </button>
        </div>
        );
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        {this.switchRender()}
      </div>
    )
  }
}

export default NavBar;