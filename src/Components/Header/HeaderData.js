import HeaderStyle from "../Header/Header.module.css";
import logo from "../../Assets/AllViews/logo.svg";
import fbLogo from "../../Assets/AllViews/fb-logo.svg";
import igLogo from "../../Assets/AllViews/instagram-logo.svg";
import { Button, Image } from "react-bootstrap";

const logoImg = HeaderStyle.logoImg;
const name = HeaderStyle.name;
const title = HeaderStyle.title;
const btn = HeaderStyle.btn;
const fbIcon = HeaderStyle.fbIcon;
const igIcon = HeaderStyle.igIcon;
const titleWrapper = HeaderStyle.titleWrapper;
const iconWrapper = HeaderStyle.iconWrapper;
const btnWrapper = HeaderStyle.btnWrapper;

const HeaderData = [
    {
        id: 1,
        section: <>
            <Image src={logo} className={logoImg} />
            <div className={titleWrapper}>
                <span className={name}>Pastor Teresa Bryant
                    <p className={title}>Global Leaders <br /> Outreach Ministries, INC.</p>
                </span>
            </div>
        </>
    },
    {
        id: 2,
        section: <>
            <Image src={logo} className={logoImg} />
            <div className={titleWrapper}>
                <span className={name}>Dr. Teresa Bryant, Pastor
                    <p className={title}>GLO Network <br />Ministries, INC.</p>
                </span>
            </div>
        </>
    },
    {
        id: 3,
        section: <>
            <div className={btnWrapper}>
                <Button className={btn} href="#events">EVENTS</Button>
                <Button className={btn} href="#contact">PARTNER</Button><br />
            </div>
        </>
    },
    {
        id: 4,
        section: <>
            <div className={iconWrapper}>
                <Image src={fbLogo} className={fbIcon} />
                <Image src={igLogo} className={igIcon} />
            </div>
        </>
    }
];

export default HeaderData;