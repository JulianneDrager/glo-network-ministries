import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useMediaQuery } from "@mui/material";

const Name = () => {
  const matchMobile = useMediaQuery("(max-width: 725px)");
  const labelForm = ContactStyle.labelForm;
  const name = ContactStyle.name;

  return (
    <>
      {/* mobile view */}
      {matchMobile && (
        <div>
          <Form.Label className={labelForm}>Name</Form.Label>
          <Form.Group as={Col}>
            <InputGroup hasValidation>
              <Form.Control
                id="name"
                className={name}
                size="sm"
                name="name"
                type="text"
                required
                minLength={3}
                maxLength={20}
              />
              <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
                Full name required
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </div>

      )}
      {/* Desktop View */}
      {!matchMobile && (
        <div>
          <Form.Group as={Row}>
            <Form.Label className={labelForm} column sm="3">Name</Form.Label>
            <Col sm="9">
              <InputGroup hasValidation>
                <Form.Control
                  id="name"
                  className={name}
                  size="sm"
                  name="name"
                  type="text"
                  required
                  minLength={3}
                  maxLength={20}
                />
                <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
                  Full name required
                </Form.Control.Feedback>
              </InputGroup>
            </Col>

          </Form.Group>
        </div>
      )}

    </>
  );
};
export default Name;