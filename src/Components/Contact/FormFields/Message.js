import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useMediaQuery } from "@mui/material";

const Message = () => {
  const matchMobile = useMediaQuery("(max-width: 725px)");
  const messageContact = ContactStyle.messageContact;
  const labelForm = ContactStyle.labelForm;
  return (
    <>
      {/* mobile view */}
      {matchMobile && (
        <div>
          <Form.Label className={labelForm}>Message</Form.Label>
          <Form.Control
            className={messageContact}
            size="sm"
            as="textarea"
            name="message"
            type="text"
            rows={3}
          />
        </div>
      )}
      {/* Desktop View */}
      {!matchMobile && (
        <div>
          <Form.Group as={Row}>
            <Form.Label className={labelForm} column sm="2">Message</Form.Label>
            <Col sm="10">
              <Form.Control
                className={messageContact}
                size="sm"
                as="textarea"
                name="message"
                type="text"
                rows={3}
              />
            </Col>
          </Form.Group>
        </div>
      )}
    </>
  );
};
export default Message;