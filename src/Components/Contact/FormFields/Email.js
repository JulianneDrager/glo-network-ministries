import React from "react";
import { Form } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Email = () => {
  const labelForm = ContactStyle.labelForm;
  const email = ContactStyle.email;
  return (
    <>
      <Form.Label className={labelForm}>Email Address*</Form.Label>

      <Form.Control
        className={email}
        name="email"
        type="email"
        rows={3}
        required
      />
    </>
  );
};
export default Email;