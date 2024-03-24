import React from "react";
import { Row, Card } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Title = () => {
  const contactTitle = ContactStyle.contactTitle;
  const infoText = ContactStyle.infoText;

  return (
    <>
        <h3 className={contactTitle}>
          CONTACT
        </h3>
        {/* <p className={infoText}>
          CHURCH SERVICE: <br />
          11:45 a.m. Prayer | 12 Noon Service <br />
          PH: 631.820.1482 <br />
          BIBLE STUDY: 7 PM <br />
          EM: Glonetworkministries@gmail.com <br />
        </p> */}
    </>
  );
};
export default Title;