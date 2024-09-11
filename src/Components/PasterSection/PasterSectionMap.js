import React, { useContext } from "react";
import PasterSectionData from "./PasterSectionData";
import PasterSectionProps from "./PasterSectionProps";
import PasterSectionStyle from "./PasterSection.module.css";
import { useMediaQuery } from "@mui/material";
import {
  Accordion,
  AccordionContext,
  Button,
  Col,
  Row,
  useAccordionButton,
} from "react-bootstrap";

const PasterSectionMap = () => {
  const matchMobile = useMediaQuery("(max-width: 725px)");
  const scheduleWrapper = PasterSectionStyle.scheduleWrapper;

  const colA = PasterSectionStyle.colA;
  const colC = PasterSectionStyle.colC;
  const accordionBody = PasterSectionStyle.accordionBody;
  const seeMore = PasterSectionStyle.seeMore;

  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <div style={{ textAlign: "center" }}>
        <Button
          // className={seeMore}
          type="button"
          onClick={decoratedOnClick}
          style={{
            display: isCurrentEventKey ? "none" : "inline",
            backgroundColor: "white",
            color: "black",
            border: "none",
            margin: "0 0 2vw 0",
          }}
        >
          {children}
          {isCurrentEventKey ? "CLOSE" : "SEE MORE"}
        </Button>
      </div>
    );
  };

  const pasterInfo = PasterSectionData.map((pasterInfo) => {
    return <PasterSectionProps key={pasterInfo.id} {...pasterInfo} />;
  });

  return (
    <div>
      <div className={scheduleWrapper}>
        <Accordion>
          <div style={{ padding: "0 2rem" }} id="PasterSection">
            {pasterInfo[0]}
          </div>
          <ContextAwareToggle eventKey="0"></ContextAwareToggle>
          <Accordion.Collapse eventKey="0">
            <div style={{ padding: "0 2rem" }}>{pasterInfo[1]}</div>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </div>
  );
};

export default PasterSectionMap;
