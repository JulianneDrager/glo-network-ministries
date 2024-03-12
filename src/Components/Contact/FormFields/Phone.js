import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Phone = () => {
  const labelForm = ContactStyle.labelForm;
  const phone = ContactStyle.phone;
  return (
    <>
      <Form.Label className={labelForm}>Phone Number</Form.Label>
      <Form.Group as={Col} sm={12}>
        <InputGroup hasValidation>
          <Form.Control
            className={phone}
            name="phone-number"
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Please enter a valid phone number format
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Phone;