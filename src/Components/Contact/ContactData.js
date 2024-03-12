import { Button, Form, InputGroup, Col } from "react-bootstrap";
import ContactStyle from "./Contact.module.css";


const labelForm = ContactStyle.labelForm;
const name = ContactStyle.name;
const email = ContactStyle.email;
const phone = ContactStyle.phone;
const message = ContactStyle.message;
const btn = ContactStyle.btn;

const ContactData = [
    {
        id: 1,
        field: <>
                <Form.Label className={labelForm}>Full Name*</Form.Label>
                <Form.Group as={Col}>
                <InputGroup hasValidation>
                    <Form.Control
                    id="name"
                    className={name}
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
            </>
    },
    {
        id: 2,
        field: <>
                <Form.Label className={labelForm}>Email Address*</Form.Label>    
                <Form.Control
                className={email}
                name="email"
                type="email"
                rows={3}
                required
                />
                </>
    },
    {
        id: 3,
        field: <>
                <Form.Label className={labelForm}>Your Phone Number*</Form.Label>
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
    },
    {
        id: 4,
        field: <>
                <Form.Label className={labelForm}>Please provide details about your event/project</Form.Label>  
                <Form.Control
                className={message}
                as="textarea"
                name="message"
                type="text"
                rows={3}
                placeholder="desired location, expectations, budget limit"
                />
            </>
    },
    {
        id: 5,
        field: <div>
                <Button variant="light" type="submit" value="send" className={btn}>
                SUBMIT
                </Button>
            </div>
    },
];

export default ContactData;