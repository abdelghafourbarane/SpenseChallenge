import React from "react";

import "./Menu.styles.scss";

const Menu = () => (
  <div className="menu-container">
    <div className="ui grid middle aligned  menu-bar">
      <div className="three column row">
        <div className="column logo">
          <span>spense. </span>
        </div>
        <div className="column nav">
          <span className="nav-item">Business</span>
          <span className="nav-item">Pricing</span>
          <span className="nav-item">Features</span>
        </div>
        <div className="column user">
          <span className="user-item">Login</span>
          <span className="user-item">
            <button className="ui button secondary">Get Started</button>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
