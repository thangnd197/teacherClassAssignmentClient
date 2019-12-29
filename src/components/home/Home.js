import React from 'react';
import SideBar from './SideBar';
import Classes from './Classes';
import Course4teacher from './Course4teacher';
import SolutionContainer from './solution/SolutionContainer';
import ModalAddInput from './ModalAddInput';
import Cookies from 'universal-cookie';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      typePageContent: "",
      input: "null",
      input_id: 0,
      solution: {}
    };
    this.changeStatePageContent = this.changeStatePageContent.bind(this);
  }

  componentDidMount() {
    const cookie = new Cookies();
    const userID = cookie.get("userID");
    fetch(
      'http://localhost:8080/user/'+ userID +'/inputs'
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
      case "solutions":
        return <SolutionContainer input={this.state.input} changeDetailSolution={this.changeDetailSolution}/>;
      default:
        return <h3>nothing to show ban oi</h3>
    }
  }

  render() {
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
          <div className="col-sm-10  content-page">
            {this.ngolanhuong()}
          </div>
        </div>
        <div>
          <ModalAddInput/>
        </div>
      </div>
    );
  }
}

export default Home;