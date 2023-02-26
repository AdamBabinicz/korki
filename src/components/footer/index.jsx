import React from "react";
import "./style.scss";
import Section from "../shared/section";
import logo from "../../images/22.png";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

const Footer = () => {
  return (
    <Section background="dark" className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo" onClick={() => scrollToSection("home")}>
          <img src={logo} alt="..." />
        </div>
        <p className="log">RAF-EDU</p>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Zakres
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            Pomoce
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("blogs")}
          >
            Korzyści
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Kontakt
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon
            color="#FF0000"
            icon={<FaYoutube />}
            link="https://www.youtube.com"
          />
          <SocialIcon
            color="#3b5998"
            icon={<FaFacebook />}
            link="https://www.facebook.com"
          />
          <SocialIcon
            color="#00acee"
            icon={<FaTwitter />}
            link="https://www.twitter.com"
          />
          <SocialIcon
            color="#E84C88"
            icon={<FaInstagram />}
            link="https://www.instagram.com"
          />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Radom, 2023 - {new Date().getFullYear()}.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
