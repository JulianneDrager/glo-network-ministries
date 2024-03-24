import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useMediaQuery } from "@mui/material";

const Email = () => {
  const matchMobile = useMediaQuery("(max-width: 725px)");
  const labelForm = ContactStyle.labelForm;
  const email = ContactStyle.email;
  return (
    <>
      {/* mobile view */}
      {matchMobile && (
        <div>
          <Form.Label className={labelForm}>Email</Form.Label>
          <Form.Control
            className={email}
            size="sm"
            name="email"
            type="email"
            rows={3}
            required
          />
        </div>
      )}
      {/* Desktop View */}
      {!matchMobile && (
        <div>
          <Form.Group as={Row}>
            <Form.Label className={labelForm} column sm="2">Email</Form.Label>
            <Col sm="10">
              <Form.Control
                className={email}
                size="sm"
                name="email"
                type="email"
                rows={3}
                required
              />
            </Col>
          </Form.Group>

        </div>
      )}

    </>
  );
};
export default Email;