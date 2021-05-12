import React from "react";

import "./brandList.styles.scss";

import YoutubeLogo from "../../Assets/YoutubeLogo.png";
import TwitterLogo from "../../Assets/TwitterLogo.png";
import FacebookLogo from "../../Assets/FacebookLogo.png";
import SlackLogo from "../../Assets/SlackLogo.png";
import PinterestLogo from "../../Assets/PinterestLogo.png";
import RedditLogo from "../../Assets/RedditLogo.png";
import GoogleLogo from "../../Assets/GoogleLogo.png";
import DribbbleLogo from "../../Assets/DribbbleLogo.png";

const BrandList = () => (
  <div className="brand-list-container">
    <img src={FacebookLogo} />
    <img src={DribbbleLogo} />
    <img src={YoutubeLogo} />
    <img src={PinterestLogo} />
    <img src={TwitterLogo} />
    <img src={RedditLogo} />
    <img src={GoogleLogo} />
    <img src={SlackLogo} />
  </div>
);

export default BrandList;
