import AnnouncementsStyle from "./Announcements.module.css";
const purpleText = AnnouncementsStyle.purpleText;
const AnnouncementsData = [
  {
    id: 1,
    heading: (
      <>
        {/* <span className={purpleText}>Thursday</span> August 22nd{" "}
        <span style={{ fontFamily: "times new roman" }}>-</span>{" "}
        <span className={purpleText}>Friday</span> August 23rd */}
        <span className={purpleText}>Friday</span> August 23rd
      </>
    ),
    // announcement: "BACK TO SCHOOL BOOK BAG PACKING",
    announcement: "Title goes here",
    // details:
    //   "We need volunteers from 3PM to 9PM to help pack students book bags with school supplies for our Family Fun Day School Rally. We need men to help unload book bags for 3PM truck delivery",
    details: "dets go here",
  },
  {
    id: 2,
    heading: (
      <>
        <span className={purpleText}>Saturday</span> August 2
        <span style={{ fontFamily: "times new roman" }}>4</span>th
      </>
    ),
    announcement: "FAMILY FUN DAY SCHOOL RALLY BAG DISTRIBUTION",
    details:
      "We need volunteers from 8AM to 4PM to help distribute the book bags.",
  },

  {
    id: 3,
    heading: (
      <>
        <span className={purpleText}>Sunday</span> September 1st
      </>
    ),
    announcement:
      "Communion, congregation is asked to wear white. Please note, communion will be held on months that carry five Sundays",
  },

  {
    id: 4,
    heading: (
      <>
        <span className={purpleText}>Wednesday</span> September{" "}
        <span style={{ fontFamily: "times new roman" }}>4</span>th
      </>
    ),
    announcement: (
      <>
        GLO Counsel training will begin at 6 PM <br />
        GLO Bible Study will begin at 7PM
      </>
    ),
  },
];

export default AnnouncementsData;
