import React from "react";
import FooterStyle from "./Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerStyle = FooterStyle.footerStyle;

    return (
        <footer className={footerStyle}>
           @ COPYRIGHT GLOMINISTRIESNETWORK {currentYear}
        </footer>
    );
};

export default Footer;
