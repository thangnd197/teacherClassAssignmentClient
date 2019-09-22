import React from "react";
import "../styles/login.css";

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"username": ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
  }

  handleChangeUserName(e) {
    this.setState({"username": e.target.value});
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append('name', this.state.username);
  
    fetch(
      'http://localhost:8080/user',
      {
        method: 'POST',
        body: formData
      }
    ).then(
      this.props.history.push('/login')
    );
  }

  render() {
    return (
      <div className="container">
      <div className="card card-container">
        <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"  alt="xxx"/>
        <p id="profile-name" className="profile-name-card"></p>
        <form className="form-signin">
          <span id="reauth-email" className="reauth-email"></span>
          {/* <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
          <input type="password" id="inputPasswordRetype" className="form-control" placeholder="Password" required/> */}
          <input id="username" className="form-control" placeholder="username" required autoFocus
            onChange={this.handleChangeUserName}/>
          <br></br>
          <button className="btn btn-lg btn-primary btn-block btn-signin" type="button"
            value={this.state.username}
            onClick={this.handleSubmit}
            >Register</button>
        </form>
      </div>
  </div>
    );
  }
}

export default Register;