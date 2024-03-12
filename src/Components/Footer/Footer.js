import React from "react";
import FooterStyle from "./Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerDesktop = FooterStyle.footerDesktop;

    return (
        <footer className={footerDesktop}>
            COPY RIGHT @ {currentYear}
            <a href="https://www.designinglory.com">DESIGNINGLORY.COM</a>
        </footer>
    );
};

export default Footer;
