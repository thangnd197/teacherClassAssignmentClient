import React from "react";
import "../styles/login.css";
import Cookies from 'universal-cookie';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: ''
      }
    }
    this.handleSignin = this.handleSignin.bind(this);
  }

  handleSignin(e) {
    e.preventDefault();
    const cookies = new Cookies();
    cookies.set('isLogin', true, { path: '/' });
    cookies.set('username', this.state.user.username, { path: '/' });
    window.location.href="/";
  }

  handleChangeUsername(e) {
    this.setState({user: {username: e.target.value}});
  }

  render() {
    return (
      <div className="container">
      <div className="card card-container">
          <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="xxx"/>
          <p id="profile-name" className="profile-name-card"></p>
          <form className="form-signin" onSubmit={this.handleSignin}>
              <span id="reauth-email" className="reauth-email"></span>
              {/* <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
              <div id="remember" className="checkbox">
                  <label>
                      <input type="checkbox" value="remember-me"/> Remember me
                  </label>
              </div> */}
              <input id="username" className="form-control" placeholder="username" required autoFocus
                onChange={this.handleChangeUsername.bind(this)}/>
              <br/>
              <button className="btn btn-lg btn-primary btn-block btn-signin"
              type="submit">
                Sign in
              </button>
          </form>
          {/* <a href="#top" className="forgot-password">
              Forgot the password?
          </a> */}
        </div>
      </div>
    );
  }
}

export default Login;