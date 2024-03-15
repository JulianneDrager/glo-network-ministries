import React from "react";
import HeaderStyle from "./Header.module.css";
import logo from "../../Assets/AllViews/logo.svg";
import fbLogo from "../../Assets/AllViews/fb-logo.svg";
import igLogo from "../../Assets/AllViews/instagram-logo.svg";
import { Button, Image } from "react-bootstrap";

const Header = () => {
    const headerWrapper = HeaderStyle.headerWrapper;
    const logoImg = HeaderStyle.logoImg;
    const name = HeaderStyle.name;
    const title = HeaderStyle.title;
    const btn = HeaderStyle.btn;
    const fbIcon = HeaderStyle.fbIcon;
    const igIcon = HeaderStyle.igIcon;
    const titleWrapper = HeaderStyle.titleWrapper;
    const logoWrapper = HeaderStyle.logoWrapper;
    const btnWrapper = HeaderStyle.btnWrapper;

    return (
        <>
            <div className={headerWrapper}>
                <Image src={logo} className={logoImg} />
                <div className={titleWrapper}>
                    <span className={name}>Pastor Teresa Bryant
                        <p className={title}>Global Leaders <br /> Outreach Ministries, INC.</p>
                    </span>
                </div>
                <div className={btnWrapper}>
                    <Button className={btn} href="#events">EVENTS</Button>
                    <Button className={btn} href="#contact">PARTNER</Button><br />
                </div>
                <div className={logoWrapper}>
                    <Image src={fbLogo} className={fbIcon} />
                    <Image src={igLogo} className={igIcon} />
                </div>
            </div>
        </>
    )
}

export default Header;