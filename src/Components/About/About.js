import React from "react";
import AboutStyle from "./About.module.css";
import { useMediaQuery } from "@mui/material";
import aboutPhoto from "../../Assets/AllViews/about-slideshow-placeholder.jpg";
import quote from "../../Assets/AllViews/quote.svg";
import { Col, Image, Row } from "react-bootstrap";
import { purple } from "@mui/material/colors";

const About = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const mobileWrapper = AboutStyle.mobileWrapper;
    const imgMobile = AboutStyle.imgMobile;
    const goldText = AboutStyle.goldText;
    const quoteMobile = AboutStyle.quoteMobile;
    const quotation = AboutStyle.quotation;
    const quotationMark = AboutStyle.quotationMark;
    const quoteWrapper = AboutStyle.quoteWrapper;
    const purpleText = AboutStyle.purpleText;
    const imgDesktop = AboutStyle.imgDesktop;
    const desktopWrapper = AboutStyle.desktopWrapper;

    return (
        <div id="about">
            {/* mobile view */}
            {matchMobile && (
                <div>
                    <Image src={aboutPhoto} className={imgMobile} />
                    <div className={mobileWrapper}>
                        <h1>About <span className={purpleText}>G.L.O.</span></h1>
                        <p>
                            We believe creating platforms to display the importance of the performing arts and collaborating feeding programs are some of the most effective ways to improving human conditions and community outreach.{' '}
                            <span className={goldText}>GLOBAL LEADERS OUTREACH</span> helps impulse arts & culture in an intercultural exchange project to bridge social good programs.
                        </p>
                        <Image src={quote} className={quotationMark} />
                        <div className={quoteWrapper}>
                            <em className={quotation}>Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven</em>
                        </div>
                    </div>
                </div>
            )}
            {/* Desktop View */}
            {!matchMobile && (
                <div className={desktopWrapper}>
                    <Row>
                        <Col>
                            <div>
                                <h1>About <span className={purpleText}>G.L.O.</span></h1>
                                <p>
                                    We believe creating platforms to display the importance of the performing arts and collaborating feeding programs are some of the most effective ways to improving human conditions and community outreach.{' '}
                                    <span className={goldText}>GLOBAL LEADERS OUTREACH</span> helps impulse arts & culture in an intercultural exchange project to bridge social good programs.
                                </p>
                                <Image src={quote} className={quotationMark} />
                                <div className={quoteWrapper}>
                                    <em className={quotation}>Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven</em>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Image src={aboutPhoto} className={imgDesktop} />
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    )
}

export default About;