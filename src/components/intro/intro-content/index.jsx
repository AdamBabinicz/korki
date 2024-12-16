import React from "react";
import "./style.scss";
import hand from "../../../images/hand.avif";
import CallToAction from "../../shared/callToAction";
import img from "../../../images/8.avif";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <p className="log">RAF-EDU</p>
          <h1 className="title">
            <span className="small-text">
              <span className="text">Szukasz </span>
              <span className="icon">
                <img src={hand} alt="..." />
              </span>
              &nbsp;
              <span className="text"> korepetytora</span>
            </span>
            <span className="big-text">z&nbsp;matematyki?</span>
          </h1>
          <p>
            Absolwent Uniwersytetu Technologiczno-Humanistycznego im. Kazimierza
            Pułaskiego w Radomiu oferuje korepetycje z&nbsp;matematyki dla
            uczniów szkół podstawowych oraz&nbsp;średnich.
          </p>
          <a href="tel:+48516283896">
            <CallToAction text="Zadzwoń!" />
          </a>
        </div>
        <div className="right-col">
          <img src={img} alt="..." />
          <div className="highlights horizontal">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">Najlepszy korepetytor!</div>
          </div>
          <div className="highlights vertical">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4+</span>
              Zadowolony uczeń
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
