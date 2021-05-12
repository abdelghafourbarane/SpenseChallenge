import React from "react";

import "./securityAds.styles.scss";

import phoneImage from "../../Assets/phone.png";

const SecurityAds = () => (
  <div className="security-ads-container">
    <div className="security-text">
      <h1>Secure your money with Escrow.</h1>
      <p>
        Spense uses Escrow to secure all payments. We believe Escrow offers the
        highest level of security for your payments, so you never need to worry
        about scams.
      </p>
      <span>
        <a href="https://google.com">Learn more about Escrow {`-›`} </a>
      </span>
    </div>
    <div className="security-image">
      <img src={phoneImage} />
    </div>
  </div>
);

export default SecurityAds;
