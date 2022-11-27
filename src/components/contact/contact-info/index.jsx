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
        <span className="txt">+48 000 000 000</span>
      </div>
      <div className="contact-option">
        <MdEmail />
        &nbsp;
        <span className="txt">puaro@vp.pl</span>
      </div>
    </div>
  );
};

export default ContactInfo;
