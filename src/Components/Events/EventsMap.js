import React from "react";
import EventsData from "./EventsData";
import EventsProps from "./EventsProps";
import EventsStyle from "./Events.module.css";
import { useMediaQuery } from "@mui/material";

const EventsMap = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const aboutWrapper = AboutStyle.aboutWrapper;

    const Event = EventsData.map((event) => {
        return <EventsProps key={event.id} {...event} />;
    });

    return (
        <div className={aboutWrapper} id="events">
            {/* mobile view */}
            {matchMobile && (
                <div>

                    {Event}

                </div>
            )}
            {/* Desktop View */}
            {!matchMobile && (
                <div>

                </div>
            )}
        </div>
    )
};

export default EventsMap;