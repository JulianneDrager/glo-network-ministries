import React from "react";
import { Button } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const SubmitButton = ({ ffIsValid, validated }) => {
  const btn = ContactStyle.btn;

  return (
    <div>
      <Button variant="light" type="submit" value="send" className={btn}>
        SUBMIT
      </Button>
    </div>
  );
};
export default SubmitButton;