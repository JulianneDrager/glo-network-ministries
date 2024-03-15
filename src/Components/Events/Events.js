import React from "react";
import EventsStyle from "./Events.module.css";
import { useMediaQuery } from "@mui/material";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const Events = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const scheduleWrapper = EventsStyle.scheduleWrapper;
    const eventWrapper = EventsStyle.eventWrapper;
    const events = EventsStyle.events;

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

                </div>
            )}
        </div>
    )
}

export default Events;