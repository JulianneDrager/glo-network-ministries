import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useMediaQuery } from "@mui/material";

const Phone = () => {
  const matchMobile = useMediaQuery("(max-width: 725px)");
  const labelForm = ContactStyle.labelForm;
  const phone = ContactStyle.phone;
  const labelFormPhone = ContactStyle.labelFormPhone;

  return (
    <>
      {/* mobile view */}
      {matchMobile && (
        <div>
          <Form.Label className={labelForm}>Phone</Form.Label>
          <Form.Group as={Col} sm={12}>
            <InputGroup hasValidation>
              <Form.Control
                className={phone}
                size="sm"
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
        </div>
      )}
      {/* Desktop View */}
      {!matchMobile && (
        <div>
          <Form.Group as={Row}>
            <Form.Label className={labelForm} column sm="3">Phone</Form.Label>
            <Col sm="9">
              <InputGroup hasValidation>
                <Form.Control
                  className={phone}
                  size="sm"
                  name="phone-number"
                  type="tel"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                />
                <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
                  Please enter a valid phone number format
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Form.Group>
        </div>
      )}

    </>
  );
};
export default Phone;