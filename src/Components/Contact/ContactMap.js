import { useNavigate } from "react-router-dom";
import { Button, Form, Row } from "react-bootstrap";
import { useRef } from "react";
import PhotoContactData from "./PhotoContactData";
import PhotoContactProps from "./PhotoContactProps";
import emailjs from "@emailjs/browser";
import ContactStyle from "./Contact.module.css";

const ContactMap = () => {
  const formStyle = ContactStyle.formStyle;
  const formBackground = ContactStyle.formBackground;
  const formBody = ContactStyle.formBody;
  const contactTitle = ContactStyle.contactTitle;
  const titleText = ContactStyle.titleText;

  const navigate = useNavigate();
  const refForm = useRef();

  const FormField = PhotoContactData.map((field) => {
    return <PhotoContactProps key={field.id} {...field} />;
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
    <div className={formBackground}>
      <div className={formBody}>
      <Form
        id="contact"
        ref={refForm}
        onSubmit={sendEmail}
        className={formStyle}
        autoComplete="on"
      >
        <div className={titleText}>
            <Row>
            <h2 className={contactTitle}>
            Photography Contact Form
            </h2>
            <p>
            Our professional photography services in Long Island, New York, are tailored to preserve your cherished memories. Whether you're looking for breathtaking wedding photos, or stunning family portraits, Emile will exceed your expectations in capturing your most precious moments with artistry and precision.
            </p>      
            </Row>
        </div>
        {FormField}
      </Form>
    </div>
    </div>
  );
};
export default ContactMap;