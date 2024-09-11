import { Form, InputGroup, Col } from "react-bootstrap";
import ContactStyle from "./Contact.module.css";

const contactTitle = ContactStyle.contactTitle;
const labelForm = ContactStyle.labelForm;
const name = ContactStyle.name;
const phone = ContactStyle.phone;
const email = ContactStyle.email;
const messageContact = ContactStyle.messageContact;
const infoText = ContactStyle.infoText;

const MobileContactData = [
  {
    id: 1,
    field: (
      <>
        <h2 className={contactTitle}>CONTACT</h2>
      </>
    ),
  },
  {
    id: 2,
    field: (
      <>
        <p className={infoText}>
          CHURCH SERVICE: <br />
          10:45 a.m. Fresh Anointed Prayer | 11AM Service <br />
          PH: 631.820.1482 <br />
          BIBLE STUDY: 7 PM <br />
          EM: Glonetworkministries@gmail.com <br />
        </p>
      </>
    ),
  },
  {
    id: 3,
    field: (
      <>
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
              <Form.Control.Feedback
                style={{ marginTop: "-.9rem" }}
                type="invalid"
              >
                Full name required
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </div>
      </>
    ),
  },
  {
    id: 4,
    field: (
      <>
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
              <Form.Control.Feedback
                style={{ marginTop: "-.9rem" }}
                type="invalid"
              >
                Please enter a valid phone number format
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </div>
      </>
    ),
  },
  {
    id: 5,
    field: (
      <>
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
      </>
    ),
  },
  {
    id: 6,
    field: (
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
    ),
  },
];

export default MobileContactData;
