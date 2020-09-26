import React, { Component } from "react";
import Logo from '../../asset/images/ndirgoyeekar-logo.jpg';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="shopping-app-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
             <img className="logo" src={Logo} alt="logo" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
