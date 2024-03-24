import React, { useContext, useState } from "react";
import EventsStyle from "./Events.module.css";
import { useMediaQuery } from "@mui/material";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { Accordion, AccordionContext, Col, Row, useAccordionButton } from "react-bootstrap";

const Events = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const scheduleWrapper = EventsStyle.scheduleWrapper;
    const eventWrapper = EventsStyle.eventWrapper;
    const eventWrapperA = EventsStyle.eventWrapperA;
    const eventWrapperB = EventsStyle.eventWrapperB;
    const eventWrapperC = EventsStyle.eventWrapperC;
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

    return (
        <div>
            {/* mobile view */}
            {matchMobile && (
                <Accordion >
                    <ContextAwareToggle eventKey="0">
                        <div className={scheduleWrapper} id="events">
                            <h2>SCHEDULE OF EVENTS</h2>
                            <h6>MONDAY</h6>
                            <h1>Sep 6</h1>
                            <div className={eventWrapper}>
                                <p>12:00 p.m. <br />
                                    <span className={events}>EVENT A</span>
                                </p>
                            </div>
                            <div className={eventWrapper}>
                                <p>2:00 p.m. <br />
                                    <span className={events}>EVENT A1</span>
                                </p>
                            </div>
                            <div className={eventWrapper}>
                                <p>7:00 p.m. <br />
                                    <span className={events}>EVENT A2</span>
                                </p>
                            </div>
                            <p className={seeMore}>
                                Click for More
                            </p>
                        </div>
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey="0">
                        <div className={accordionBody}>
                            <div className={scheduleWrapper}>
                                <h6>TUESDAY</h6>
                                <h1>Sep 7</h1>
                                <div className={eventWrapper}>
                                    <p>12:00 p.m. <br />
                                        <span className={events}>EVENT B</span>
                                    </p>
                                </div>
                                <div className={eventWrapper}>
                                    <p>2:00 p.m. <br />
                                        <span className={events}>EVENT B1</span>
                                    </p>
                                </div>
                                <div className={eventWrapper}>
                                    <p>7:00 p.m. <br />
                                        <span className={events}>EVENT B2</span>
                                    </p>
                                </div>
                            </div>
                            <div className={scheduleWrapper}>
                                <h6>WEDNESDAY</h6>
                                <h1>Sep 8</h1>
                                <div className={eventWrapper}>
                                    <p>12:00 p.m. <br />
                                        <span className={events}>EVENT C</span>
                                    </p>
                                </div>
                                <div className={eventWrapper}>
                                    <p>2:00 p.m. <br />
                                        <span className={events}>EVENT C1</span>
                                    </p>
                                </div>
                                <div className={eventWrapper}>
                                    <p>7:00 p.m. <br />
                                        <span className={events}>EVENT C2</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            )}
            {/* Desktop View */}
            {!matchMobile && (
                <div>
                    <div className={scheduleWrapper}>
                        <h2>SCHEDULE OF EVENTS</h2>
                        <Row>
                            <Col className={colA}>
                                <h6>MONDAY</h6>
                                <h1>Sep 6</h1>
                                <div className={eventWrapper}>
                                    <p>12:00 p.m. <br />
                                        <span className={events}>EVENT A</span>
                                    </p>
                                </div>
                                <div className={eventWrapper}>
                                    <p>2:00 p.m. <br />
                                        <span className={events}>EVENT A1</span>
                                    </p>
                                </div>
                                <div className={eventWrapper}>
                                    <p>7:00 p.m. <br />
                                        <span className={events}>EVENT A2</span>
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <h6>TUESDAY</h6>
                                <h1>Sep 7</h1>
                                <div className={eventWrapper}>
                                    <p>12:00 p.m. <br />
                                        <span className={events}>EVENT B</span>
                                    </p>
                                </div>
                                <div className={eventWrapper}>
                                    <p>2:00 p.m. <br />
                                        <span className={events}>EVENT B1</span>
                                    </p>
                                </div>
                                <div className={eventWrapper}>
                                    <p>7:00 p.m. <br />
                                        <span className={events}>EVENT B2</span>
                                    </p>
                                </div>
                            </Col>
                            <Col className={colC}>
                                <h6>WEDNESDAY</h6>
                                <h1>Sep 8</h1>
                                <div className={eventWrapper}>
                                    <p>12:00 p.m. <br />
                                        <span className={events}>EVENT C</span>
                                    </p>
                                </div>
                                <div className={eventWrapper}>
                                    <p>2:00 p.m. <br />
                                        <span className={events}>EVENT C1</span>
                                    </p>
                                </div>
                                <div className={eventWrapper}>
                                    <p>7:00 p.m. <br />
                                        <span className={events}>EVENT C2</span>
                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Events;