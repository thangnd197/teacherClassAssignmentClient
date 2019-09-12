import React from 'react';
import Cookies from 'universal-cookie';

class Header extends React.Component {

  handleLogin() {
    window.location.href = "/login";
  }

  handleRegister() {
    window.location.href = "/register";
  }

  handleLogout() {
    const cookies = new Cookies();
    cookies.set("isLogin", false, { path: '/' });
    window.location.href = "/login";
  }

  render() {
    const cookies = new Cookies();
    return (
      <nav className="navbar navbar-expand-sm">
        {
        (cookies.get('isLogin') !== 'false') ?
        (<ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link header-link-app" href="#top" onClick={this.handleLogout}>Logout</a>
          </li>
        </ul>):
        (<ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link header-link-app" href="#top" onClick={this.handleLogin}>Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link header-link-app" href="#top" onClick={this.handleRegister}>Register</a>
          </li>
        </ul>)
        }
      </nav>
    );
  }
}

export default Header;