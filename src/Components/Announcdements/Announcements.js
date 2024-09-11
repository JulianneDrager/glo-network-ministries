import React from "react";
import AnnouncementsStyle from "./Announcements.module.css";
import { useMediaQuery } from "@mui/material";
import AnnouncementsData from "./AnnouncementsData";
import AnnouncementsProps from "./AnnouncementsProps";

const Announcements = () => {
  const announcementList = AnnouncementsData.map((announcementList) => {
    return (
      <AnnouncementsProps key={announcementList.id} {...announcementList} />
    );
  });

  const mobileWrapper = AnnouncementsStyle.mobileWrapper;
  const annMainHeader = AnnouncementsStyle.annMainHeader;

  return (
    <div id="Announcements" className={mobileWrapper}>
      <h1 className={annMainHeader}>Announcements</h1>

      {announcementList}
    </div>
  );
};

export default Announcements;
