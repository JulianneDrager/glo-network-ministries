import React from "react";
import EventsData from "./EventsData";
import EventsProps from "./EventsProps";
import EventsStyle from "./Events.module.css";
import { useMediaQuery } from "@mui/material";
import { Accordion, Col, Row, useAccordionButton } from "react-bootstrap";

const EventsMap = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const scheduleWrapper = EventsStyle.scheduleWrapper;
    const eventWrapper = EventsStyle.eventWrapper;
    const events = EventsStyle.events;
    const colA = EventsStyle.colA;
    const colC = EventsStyle.colC;
    const accordionBody = EventsStyle.accordionBody;
    const seeMore = EventsStyle.seeMore;


    const ContextAwareToggle = ({ children, eventKey, callback }) => {
        const black = 'rgb(0, 0, 0)';
        const none = 'none';
        const transparent = 'transparent'


        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );

        return (
            <button type="button" onClick={decoratedOnClick} style={{ backgroundColor: transparent, border: none }} >
                {children}
            </button>
        );

    }

    const Event = EventsData.map((event) => {
        return <EventsProps key={event.id} {...event} />;
    });

    return (
        <div>
            {/* mobile view */}
            {matchMobile && (
                <div className={scheduleWrapper} >
                    <Accordion >
                        <div id="events">
                            <h2>SCHEDULE OF EVENTS</h2>
                            {Event[0]}
                        </div>
                        <ContextAwareToggle eventKey="0">
                            <p className={seeMore}>
                                Click for More
                            </p>
                        </ContextAwareToggle>
                        <Accordion.Collapse eventKey="0">
                            <div>
                                <div className={accordionBody}>
                                    {Event[1]}
                                </div>
                                <div className={accordionBody}>
                                    {Event[2]}
                                </div>
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
                            <Col className={colA}>
                                {Event[0]}
                            </Col>
                            <Col>
                                {Event[1]}
                            </Col>
                            <Col className={colC}>
                                {Event[2]}
                            </Col>
                        </Row>

                    </div>
                </div>
            )}
        </div>
    )
};

export default EventsMap;