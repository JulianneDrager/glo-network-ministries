import { Form, InputGroup, Col, Row } from "react-bootstrap";
import ContactStyle from "./Contact.module.css";

const contactTitle = ContactStyle.contactTitle;
const labelForm = ContactStyle.labelForm;
const name = ContactStyle.name;
const phone = ContactStyle.phone;
const email = ContactStyle.email;
const message = ContactStyle.message;
const infoText = ContactStyle.infoText;
const infoTextB = ContactStyle.infoTextB;

const DesktopContactData = [
  {
    id: 1,
    field: (
      <>
        <h3 className={contactTitle}>CONTACT</h3>
      </>
    ),
  },
  {
    id: 2,
    field: (
      <>
        <p className={infoText}>
          CHURCH SERVICE: 10:45 a.m. Fresh Anointed Prayer | 11AM Service <br />
          BIBLE STUDY: 7 PM
        </p>
      </>
    ),
  },
  {
    id: 3,
    field: (
      <>
        <p className={infoTextB}>
          PH: 631.820.1482 <br />
          EM: Glonetworkministries@gmail.com
        </p>
      </>
    ),
  },
  {
    id: 4,
    field: (
      <div>
        <Form.Group as={Row}>
          <Form.Label className={labelForm} column sm="3">
            Name
          </Form.Label>
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
              <Form.Control.Feedback
                style={{ marginTop: "-.9rem" }}
                type="invalid"
              >
                Full name required
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
        </Form.Group>
      </div>
    ),
  },
  {
    id: 5,
    field: (
      <div>
        <Form.Group as={Row}>
          <Form.Label className={labelForm} column sm="3">
            Phone
          </Form.Label>
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
              <Form.Control.Feedback
                style={{ marginTop: "-.9rem" }}
                type="invalid"
              >
                Please enter a valid phone number format
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
        </Form.Group>
      </div>
    ),
  },
  {
    id: 6,
    field: (
      <div>
        <Form.Group as={Row}>
          <Form.Label className={labelForm} column sm="2">
            Email
          </Form.Label>
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
    ),
  },
  {
    id: 7,
    field: (
      <div>
        <Form.Group as={Row}>
          <Form.Label className={labelForm} column sm="2">
            Message
          </Form.Label>
          <Col sm="10">
            <Form.Control
              className={message}
              size="sm"
              as="textarea"
              name="message"
              type="text"
              rows={3}
            />
          </Col>
        </Form.Group>
      </div>
    ),
  },
];

export default DesktopContactData;
