import React, { useContext } from "react";
import EventsData from "./EventsData";
import EventsProps from "./EventsProps";
import EventStyle from "./Events.module.css";
import { useMediaQuery } from "@mui/material";
import {
  Accordion,
  AccordionContext,
  Button,
  Col,
  Row,
  useAccordionButton,
} from "react-bootstrap";

const EventsMap = () => {
  const matchMobile = useMediaQuery("(max-width: 725px)");
  const scheduleWrapper = EventStyle.scheduleWrapper;

  const colA = EventStyle.colA;
  const colC = EventStyle.colC;
  const accordionBody = EventStyle.accordionBody;
  const seeMore = EventStyle.seeMore;

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
          className={seeMore}
          type="button"
          onClick={decoratedOnClick}
          style={{
            display: isCurrentEventKey ? "none" : "inline",
          }}
        >
          {children}
          {isCurrentEventKey ? "CLOSE" : "SEE MORE"}
        </Button>
      </div>
    );
  };

  const Event = EventsData.map((event) => {
    return <EventsProps key={event.id} {...event} />;
  });

  return (
    <div>
      {/* mobile view */}
      {matchMobile && (
        <div className={scheduleWrapper}>
          <Accordion>
            <div id="events">
              <h2>SCHEDULE OF EVENTS</h2>
              {Event[0]}
            </div>
            <ContextAwareToggle eventKey="0"></ContextAwareToggle>
            <Accordion.Collapse eventKey="0">
              <div>
                <div className={accordionBody}>{Event[1]}</div>
                <div className={accordionBody}>{Event[2]}</div>
              </div>
            </Accordion.Collapse>
          </Accordion>
        </div>
      )}
      {/* Desktop View */}
      {!matchMobile && (
        <div id="events">
          <div className={scheduleWrapper}>
            <h2>SCHEDULE OF EVENTS</h2>
            <Row>
              <Col className={colA}>{Event[0]}</Col>
              <Col>{Event[1]}</Col>
              <Col className={colC}>{Event[2]}</Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsMap;
