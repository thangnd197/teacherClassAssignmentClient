import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import '../styles/App.css';
import '../styles/style2.css';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Home from './home/Home';
import Cookies from 'universal-cookie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cookies = new Cookies();
    if ( ! this.cookies.get("isLogin")) {
      this.cookies.set('isLogin', false, { path: '/' });
    }
  }

  render() {
    return (
      <Router>
        <div className="App" id="header-app">
          <Header/>
        </div>

        <div id="content-app">
        <Route exact path="/" component={() => (
            (this.cookies.get('isLogin') !== 'false') ? 
            <div>
              <div className="content-header row">
                <div className="col-sm-3">
                  <h2>Input list</h2>
                </div>
                <div className="col-sm-8 content-header-page-content">
                  <h2>Page content</h2>
                </div>
              </div>
              <Home/>
            </div>
             : <Redirect to="login"/>
          )}/>

        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App;
