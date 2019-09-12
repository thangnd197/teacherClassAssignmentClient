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

  render() {
    return (
      <div>
        Course4teacher - {this.state.input.id}
      </div>
    )
  }
}

export default Course4teacher;