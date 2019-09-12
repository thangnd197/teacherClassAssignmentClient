import React from 'react';
import SideBar from './SideBar';
import Classes from './Classes';
import Course4teacher from './Course4teacher';
import Parameters from './Parameters';
import Solutions from './Solutions';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      typePageContent: "",
      input: "null"
    };
    this.changeStatePageContent = this.changeStatePageContent.bind(this);
  }

  componentDidMount() {
    fetch(
      'http://localhost:8080/user/1/inputs'
    ).then(
      res => {
        return res.json();
      }
    ).then(
      (res) => {
        res.forEach(element => {
          element.jsonInput = JSON.parse(element.jsonInput);
        });
        this.setState({data: res});
      }
    );
  }

  changeStatePageContent(typePageContent, input) {
    this.setState({
      typePageContent: typePageContent,
      input: input
    });
  }

  ngolanhuong() {
    switch(this.state.typePageContent) {
      case "classes":
        return <Classes input={this.state.input}/>;
      case "course4teacher":
        return <Course4teacher input={this.state.input}/>;
      case "parameters":
        return <Parameters input={this.state.input}/>;
      case "solutions":
        return <Solutions input={this.state.input}/>;
      default:
        return <h3>nothing to show ban oi</h3>
    }
  }

  render() {
    console.log(this.state.data);
    return (
       <div>
        <div className="row">
          <div className="col-sm-2 scroll-space-app">
            {
              this.state.data 
              && 
              <SideBar inputList={this.state.data}
                      changeStatePageContent={this.changeStatePageContent}/>
            }
          </div>
          <div className="col-sm-10 scroll-space-app content-page">
            {this.ngolanhuong()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;