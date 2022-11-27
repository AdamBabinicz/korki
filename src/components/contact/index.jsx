import React from "react";
import "./style.scss";
import Section from "../shared/section";
import ContactInfo from "./contact-info";
import Form from "./form";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Masz pytania? Zapraszam do kontaktu"
      background="light"
    >
      <div className="contact-content-wrapper">
        <ContactInfo />
        <Form />
      </div>
    </Section>
  );
};

export default Contact;

// service id = service_wan04y9
// template id = template_dw6nnyq
//public key = user_yESYTXvq2eaUzMYTx9oxz
