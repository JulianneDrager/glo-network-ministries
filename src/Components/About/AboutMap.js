import React from "react";
import AboutData from "./AboutData";
import AboutProps from "./AboutProps";
import AboutStyle from "../About/About.module.css";
import { useMediaQuery } from "@mui/material";
import { Col, Image, Row } from "react-bootstrap";
import aboutPhoto from "../../Assets/AllViews/about-slideshow-placeholder.jpg";

const AboutMap = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const mobileWrapper = AboutStyle.mobileWrapper;
    const aboutImg = AboutStyle.aboutImg;
    const desktopWrapper = AboutStyle.desktopWrapper;

    const Body = AboutData.map((body) => {
        return <AboutProps key={body.id} {...body} />;
    });

    return (
        <div id="about">
            {/* mobile view */}
            {matchMobile && (
                <div className={mobileWrapper}>
                    <Image src={aboutPhoto} className={aboutImg} />
                    {Body}
                </div>
            )}
            {/* Desktop View */}
            {!matchMobile && (
                <div className={desktopWrapper}>
                    <Row>
                        <Col>
                            <div>
                                {Body}
                            </div>
                        </Col>
                        <Col >
                            <Image src={aboutPhoto} className={aboutImg} />
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    )
};

export default AboutMap;