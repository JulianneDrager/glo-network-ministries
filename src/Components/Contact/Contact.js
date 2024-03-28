import { useNavigate } from "react-router-dom";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useRef } from "react";
import Title from "./FormFields/Title";
import Name from "./FormFields/Name";
import Phone from "./FormFields/Phone";
import Email from "./FormFields/Email";
import Message from "./FormFields/Message"
import SubmitButton from "./FormFields/SubmitButton";
import ContactStyle from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "@mui/material";

const Contact = () => {
  const matchMobile = useMediaQuery("(max-width: 725px)");
  const formStyle = ContactStyle.formStyle;
  const contactMobile = ContactStyle.contactMobile;
  const contactDesktop = ContactStyle.contactDesktop;
  const infoText = ContactStyle.infoText;
  const infoTextB = ContactStyle.infoTextB;
  const cardBackground = ContactStyle.cardBackground;
  const cardBody = ContactStyle.cardBody;
  const rowB = ContactStyle.rowB;
  const rowC = ContactStyle.rowC;

  const navigate = useNavigate();
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xdgp0y4", //service id
        "connect-with-community", //template id
        // console.log("DATA",  refForm.current.name.value),
        refForm.current,
        "JY05Vk3JRaOF_oe0Q" //public key
      )
      .then(
        (result) => {
          //   alert("Message successfully sent!");
          navigate(
            `/tmp/communityoflove2022/thankyou/${refForm.current.name.value}`
          );
          // window.location.reload(false);
          console.log("result", result);
        },
        (error) => {
          alert("Failed to send the message, please try again");
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      {/* mobile view */}
      {matchMobile && (
        <div className={contactMobile}>
          <Card bg="transparent" border="0">
            <Card.Title>
              <Title />
            </Card.Title>
            <Card.Body>
              <Form
                id="contact"
                ref={refForm}
                onSubmit={sendEmail}
                className={formStyle}
                autoComplete="on"
              >
                <p className={infoText}>
                  CHURCH SERVICE: <br />
                  11:45 a.m. Prayer | 12 Noon Service <br />
                  PH: 631.820.1482 <br />
                  BIBLE STUDY: 7 PM <br />
                  EM: Glonetworkministries@gmail.com <br />
                </p>
                <Name />
                <Phone />
                <Email />
                <Message />
                <SubmitButton />
              </Form>
            </Card.Body>

          </Card>

        </div>
      )}
      {/* Desktop View */}
      {!matchMobile && (
        <div className={contactDesktop}>
          <Title />
          <Card className={cardBackground}>
            <Card.Body className={cardBody}>
              <Form
                id="contact"
                ref={refForm}
                onSubmit={sendEmail}
                className={formStyle}
                autoComplete="on"
              >
                <Row>
                  <Col>
                    <p className={infoText}>
                      CHURCH SERVICE: 11:45 a.m. Prayer | 12 Noon Service <br />
                      BIBLE STUDY: 7 PM
                    </p>
                  </Col>
                  <Col>
                    <p className={infoTextB}>
                      PH: 631.820.1482 <br />
                      EM: Glonetworkministries@gmail.com
                    </p>
                  </Col>
                </Row>
                <Row className={rowB}>
                  <Col>
                    <Name />
                  </Col>
                  <Col>
                    <Phone />
                  </Col>
                </Row>
                <Row className={rowC}>
                  <Email />
                  <Message />
                  <SubmitButton />
                </Row>
              </Form>
            </Card.Body>
          </Card>

        </div>
      )}
    </div>

  );
};
export default Contact;