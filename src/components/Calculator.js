import React from 'react';

function BoilVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  } else {
    return <p>The water would not boid</p>;
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius</legend>
        <input 
          value={this.state.temperature}
          onChange={this.handleChange}/>
        <BoilVerdict celsius={parseFloat(temperature)}/>
      </fieldset>
    );
  }
}

export default Calculator;