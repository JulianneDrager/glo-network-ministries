import React from "react";
import FooterStyle from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerStyle = FooterStyle.footerStyle;

  return (
    <footer className={footerStyle}>
      @ COPYRIGHT GLOMINISTRIESNETWORK {currentYear} | DESIGNED AND DEVELOPED BY
      {"  "}
      <Link
        style={{ margin: "0 .3rem", color: "white" }}
        to={"https://www.designinglory.com"}
      >
        {" "}
        DESIGNINGLORY LLC{" "}
      </Link>
    </footer>
  );
};

export default Footer;
