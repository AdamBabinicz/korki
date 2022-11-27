import React, { useState } from "react";
import "./style.scss";
import logo from "../../images/5.svg";
import CallToAction from "../shared/callToAction";
import { scrollToSection } from "../utils/helpers";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top-navigation-bar" id="home">
      <div className="app-logo">
        <img src={logo} alt="..." />
      </div>
      <div className={menuOpen ? "navigation active" : "navigation"}>
        <a href="#skills" onClick={toggle}>
          <span className="navigation-item">Zakres nauki</span>
        </a>
        <a href="#portfolio" onClick={toggle}>
          <span className="navigation-item">Pomoce</span>
        </a>
        <a href="#blogs" onClick={toggle}>
          <span className="navigation-item">Korzyści</span>
        </a>
        <a href="#contact" onClick={toggle}>
          <CallToAction text="Kontakt" />
        </a>
      </div>
      <div className="ham" onClick={toggle}>
        {menuOpen ? (
          <FaTimes onClick={toggle} className="close" />
        ) : (
          <FaBars className="ham-icon" />
        )}
      </div>
    </div>
  );
};

export default Navigation;
