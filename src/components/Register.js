import React from "react";
import "../styles/login.css";

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordReType: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordReType = this.handleChangePasswordReType.bind(this);
  }

  handleChangeUserName(e) {
    this.setState({username: e.target.value});
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value});
  }

  handleChangePasswordReType(e) {
    this.setState({passwordReType: e.target.value});
  }

  handleSubmit(e) {
    if (this.state.password !== this.state.passwordReType) {
      window.alert("passwords are not match !");
      return;
    }

    const formData = new FormData();
    formData.append('name', this.state.username);
    formData.append('password', this.state.password);
  
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
          <input id="username" className="form-control" placeholder="username" required autoFocus
            onChange={this.handleChangeUserName}/>
          <br/>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
            onChange={this.handleChangePassword}/>
          <input type="password" id="inputPasswordRetype" className="form-control" placeholder="Password" required
            onChange={this.handleChangePasswordReType}/>
          <br/>
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