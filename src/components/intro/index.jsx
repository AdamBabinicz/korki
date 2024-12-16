import React from "react";
import "./style.scss";
import cloud from "../../images/cloud.avif";
import cloudSoft from "../../images/cloud-soft.avif";
import Navigation from "../navigation-bar";
import IntroContent from "./intro-content";

const Intro = () => {
  return (
    <div className="Intro-section">
      <div className="vector-bg" id="parallax"></div>
      <img src={cloud} alt="..." className="cloud-soft" />
      <img src={cloudSoft} alt="..." className="cloud-soft" />
      <div className="content">
        <Navigation />
        <IntroContent />
      </div>
    </div>
  );
};

export default Intro;
