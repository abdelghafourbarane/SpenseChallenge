import React from "react";

import "./mainContainer.styles.scss";
import HeroImage from "../../Assets/Hero_Image.png";

const MainContainer = () => (
  <div className="main-container middle aligned ">
    <div className="main-container-text">
      <h1>Share your unfiltered thoughts. Get paid.</h1>
      <p>
        Spense is an open platform for individuals to share their unfiltered
        thoughts.
        <br />
        Discuss the topics you love, get paid for doing just that.
      </p>
      <ul className="main-container-check-list">
        <li>
          <i class="check circle icon"></i>Receive 99% off the earnings.
        </li>
        <li>
          <i class="check circle icon"></i>Get paid via Debit Card,ACH,or
          PayPal.
        </li>
        <li>
          <i class="check circle icon"></i>Withdraw your earnings anytime.
        </li>
      </ul>
      <div className="main-container-inputs">
        <div className="ui input">
          <input type="text" placeholder="jhon@example.com" />
        </div>
        <button className="ui button secondary">Get Started</button>
      </div>
    </div>
    <div className="main-container-image">
      <img src={HeroImage} />
    </div>
  </div>
);

export default MainContainer;
