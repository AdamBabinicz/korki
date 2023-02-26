import React from "react";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
      <h4>Chętnie odpowiem</h4>
      <div className="contact-option">
        <FaPhoneAlt />
        &nbsp;
        <a href="tel:+48516283896">
          <span className="txt">+48 516 283 896</span>
        </a>
      </div>
      <div className="contact-option">
        <MdEmail />
        &nbsp;
        <span className="txt">rafal.podymniak97@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
