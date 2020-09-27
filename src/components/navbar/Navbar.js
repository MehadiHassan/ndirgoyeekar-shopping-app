import React, { Component } from "react";
import Logo from "../../asset/images/ndirgoyeekar-logo.jpg";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <>
      <div className="shopping-app-navbar">
          <div className="logo-content">
            <img className="logo" src={Logo} alt="logo" />
            <span className="sub-title">
              YOU ARE BEAUTIFUL!!
            </span>
          </div>
      </div>
      </>
    );
  }
}

export default Navbar;
