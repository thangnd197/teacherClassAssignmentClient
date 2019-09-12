import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.stick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  stick() {
    this.setState({
      date: new Date()
    });
  }

  handleClick = () => {
    console.log("this is:", this)
  };

  render() {
    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((n) => 
      <li>{n}</li>
    );
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is, {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.handleClick}>Search</button>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Clock;