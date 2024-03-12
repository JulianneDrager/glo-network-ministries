import React from "react";
import AboutData from "./AboutData";
import AboutProps from "./AboutProps";
import AboutStyle from "../About/About.module.css";
import { useMediaQuery } from "@mui/material";

const AboutMap = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const aboutWrapper = AboutStyle.aboutWrapper;

    const Body = AboutData.map((body) => {
        return <AboutProps key={body.id} {...body} />;
    });

    return (
        <div className={aboutWrapper} id="about">
            {/* mobile view */}
            {matchMobile && (
                <div>

                    {Body}

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

export default AboutMap;