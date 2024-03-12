import React from "react";
import EventsStyle from "./Events.module.css";
import { useMediaQuery } from "@mui/material";

const Events = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const aboutWrapper = EventsStyle.aboutWrapper;

    return (
        <div id="events">
            {/* mobile view */}
            {matchMobile && (
                <div>

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