import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.typeNavBar,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.typeNavBar !== prevState.type) {
      return ({ type: nextProps.typeNavBar }); // <- this is setState equivalent
    }
    return prevState;
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