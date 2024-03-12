import React from "react";
import AboutStyle from "./About.module.css";
import { useMediaQuery } from "@mui/material";

const About = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const aboutWrapper = AboutStyle.aboutWrapper;

    return (
        <div id="about">
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

export default About;