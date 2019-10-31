import React from 'react';
import NavBar from './NavBar';
import DetailSolution from './DetailSolution';
import Solutions from './Solutions';


class SolutionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeSolutionPage: 'list',
      input: props.input,
      solution: ''
    }
    this.changeDetailSolution = this.changeDetailSolution.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.input.id !== prevState.input.id) {
      return ({ input: nextProps.input }); // <- this is setState equivalent
    }
    return prevState;
  }

  changeDetailSolution(typeSolutionPage, solution) {
    this.setState({
      typeSolutionPage: typeSolutionPage,
      solution: solution
    });
  }

  switchPage() {
    switch (this.state.typeSolutionPage) {
      case "list":
        return <Solutions input={this.state.input} changeDetailSolution={this.changeDetailSolution}/>
      case "detail":
        return <DetailSolution solution={this.state.solution} input={this.state.input}/>
      default:
        break;
    }
  }

  render() {
    
    return (
      <div>
        <NavBar typeNavBar={this.state.typeSolutionPage}/>
        <div className="scroll-space-app">
          {this.switchPage()}
        </div>
      </div>
    )
  }

}

export default SolutionContainer;