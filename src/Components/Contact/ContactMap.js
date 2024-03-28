import { useNavigate } from "react-router-dom";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useRef } from "react";
import MobileContactData from "./MobileContactData";
import DesktopContactData from "./DesktopContactData";
import ContactProps from "./ContactProps";
import emailjs from "@emailjs/browser";
import ContactStyle from "./Contact.module.css";
import { useMediaQuery } from "@mui/material";
import SubmitButton from "./FormFields/SubmitButton";

const ContactMap = () => {
  const matchMobile = useMediaQuery("(max-width: 725px)");
  const formStyle = ContactStyle.formStyle;
  const contactMobile = ContactStyle.contactMobile;
  const contactDesktop = ContactStyle.contactDesktop;
  const cardBackground = ContactStyle.cardBackground;
  const cardBody = ContactStyle.cardBody;
  const rowB = ContactStyle.rowB;
  const rowC = ContactStyle.rowC;
  const mobileCard = ContactStyle.mobileCard;

  const navigate = useNavigate();
  const refForm = useRef();

  const MobileFormField = MobileContactData.map((field) => {
    return <ContactProps key={field.id} {...field} />;
  });

  //Shows all fields excpet the Title and Information Text
  const MobileFormFields = MobileContactData.slice(2).map((field) => {
    return <ContactProps key={field.id} {...field} />;
  });

  const DesktopFormField = DesktopContactData.map((field) => {
    return <ContactProps key={field.id} {...field} />;
  });

  //Shows only the Email and Message fields
  const DesktopFormFields = DesktopContactData.slice(5).map((field) => {
    return <ContactProps key={field.id} {...field} />;
  });

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
              {MobileFormField[0]}
            </Card.Title>
            <Card.Body className={mobileCard}>
              <Form
                id="contact"
                ref={refForm}
                onSubmit={sendEmail}
                className={formStyle}
                autoComplete="on"
              >
                {MobileFormField[1]}
                {MobileFormFields}
                <SubmitButton />
              </Form>
            </Card.Body>
          </Card>
        </div>
      )}
      {/* Desktop View */}
      {!matchMobile && (
        <div className={contactDesktop}>
          {DesktopFormField[0]}
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
                    {DesktopFormField[1]}
                  </Col>
                  <Col>
                    {DesktopFormField[2]}
                  </Col>
                </Row>
                <Row className={rowB}>
                  <Col>
                    {DesktopFormField[3]}
                  </Col>
                  <Col>
                    {DesktopFormField[4]}
                  </Col>
                </Row>
                <Row className={rowC}>
                  {DesktopFormFields}
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
export default ContactMap;