import React from "react";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer-container">
    <div className="footer-section">
      <h3>spense.</h3>
      <span>
        Spense in an open source platform for individuals to share their
        unfiltered thoughts. Discuss the topics you love, and get paid for doing
        just that
      </span>
    </div>
    <div className="footer-section">
      <h3>Sitemap</h3>
      <span>Homepage</span>
    </div>
    <div className="footer-section">
      <h3>Resources</h3>
      <span>Support</span>
      <span>Contact</span>
      <span>FAQ</span>
    </div>
    <div className="footer-section">
      <h3>Compoany</h3>
      <span>About</span>
      <span>Customers</span>
      <span>Blog</span>
    </div>
    <div className="footer-section">
      <h3>Opportunities</h3>
      <span>Jobs</span>
    </div>
  </div>
);

export default Footer;
