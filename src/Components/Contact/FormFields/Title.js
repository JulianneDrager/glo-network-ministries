import React from "react";
import { Row, Card } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Title = () => {
  const contactTitle = ContactStyle.contactTitle;

  return (
    <>
      <Row>
        <h3 className={contactTitle}>
          Contact Us Today
        </h3>
      </Row>
    </>
  );
};
export default Title;