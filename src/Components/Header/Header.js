import React from "react";
import HeaderStyle from "./Header.module.css";
import { useMediaQuery } from "@mui/material";

const Header = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const Mobile = HeaderStyle.Mobile;
    const Desktop = HeaderStyle.Desktop;

    return (
        <div>
            {/* mobile view */}
            {matchMobile && (
                <div className={Mobile}>
                    Mobile
                </div>
            )}
            {/* Desktop View */}
            {!matchMobile && (
                <div className={Desktop}>
                    Desktop
                </div>
            )}
        </div>
    )
}

export default Header;