import React from "react";
import AnnouncementsStyle from "./Announcements.module.css";
import { useMediaQuery } from "@mui/material";
import { Col, Image, Row } from "react-bootstrap";

const AnnouncementsProps = (props) => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const mobileWrapper = AnnouncementsStyle.mobileWrapper;
    const desktopWrapper = AnnouncementsStyle.desktopWrapper;

    return (
        <div id="Announcements">
            {/* mobile view */}
            {matchMobile && (
                <>
                    <h1>{props.heading}</h1>
                    <p>{props.announcement}</p>
                    <p>{props.details}</p>
                    <hr style={{ margin: "10px", border: "none" }} />
                </>
            )}
            {/* Desktop View */}
            {!matchMobile && (

                <Row>
                    <Col>
                        <>
                            <h1>{props.heading}</h1>
                            <p>{props.announcement}</p>
                            <p>{props.details}</p>
                            <hr style={{ margin: "10px", border: "none" }} />
                        </>
                    </Col>

                </Row>

            )}
        </div>
    )
}

export default AnnouncementsProps;