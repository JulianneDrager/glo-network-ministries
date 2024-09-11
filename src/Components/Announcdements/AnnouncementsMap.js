import React from "react";
import AnnouncementsData from "./AnnouncementsData";
import AnnouncementsProps from "./AnnouncementsProps";
import AnnouncementsStyle from "../Announcements/Announcements.module.css";
import { useMediaQuery } from "@mui/material";
import { Col, Image, Row } from "react-bootstrap";
import GalleryAnnouncements from "./GalleryAnnouncements";

const AnnouncementsMap = () => {
  const matchMobile = useMediaQuery("(max-width: 725px)");
  const mobileWrapper = AnnouncementsStyle.mobileWrapper;
  const AnnouncementsImg = AnnouncementsStyle.AnnouncementsImg;
  const desktopWrapper = AnnouncementsStyle.desktopWrapper;

  const Body = AnnouncementsData.map((body) => {
    return <AnnouncementsProps key={body.id} {...body} />;
  });

  return (
    <div id="Announcements">
      {/* mobile view */}
      {matchMobile && (
        <div className={mobileWrapper}>
          <GalleryAnnouncements /> {Body}
        </div>
      )}
      {/* Desktop View */}
      {!matchMobile && (
        <div className={desktopWrapper}>
          <Row>
            <Col>
              <div>{Body}</div>
            </Col>
            <Col>
              <GalleryAnnouncements />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default AnnouncementsMap;
