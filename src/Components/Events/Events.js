import React from "react";
import EventsStyle from "./Events.module.css";
import { useMediaQuery } from "@mui/material";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { Col, Row } from "react-bootstrap";

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

    return (
        <div id="events">
            {/* mobile view */}
            {matchMobile && (
                <div className={scheduleWrapper}>
                    <h2>SCHEDULE OF EVENTS</h2>
                    <h3>MONDAY</h3>
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
                </div>
            )}
            {/* Desktop View */}
            {!matchMobile && (
                <div>
                    <div className={scheduleWrapper}>
                        <h2>SCHEDULE OF EVENTS</h2>
                        <Row>
                            <Col className={colA}>
                                <h3>MONDAY</h3>
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
                                <h3>TUESDAY</h3>
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
                                <h3>WEDNESDAY</h3>
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