import React from "react";
import { useMediaQuery } from "@mui/material";
import HeaderStyle from "./Header.module.css";
import HeaderData from "./HeaderData";
import HeaderProps from "./HeaderProps";


const HeaderMap = () => {
    const matchMobile = useMediaQuery("(max-width: 725px)");
    const headerWrapper = HeaderStyle.headerWrapper;

    //Creates copy of HeaderData that excludes object at index of 1
    //Objects before index 1
    const objectsBefore = HeaderData.slice(0, 1);
    //Objects after index 1
    const objectsAfter = HeaderData.slice(2);
    //String together objects before and after index 1 to create copy of array wiithout index 1.
    const mobileCopy = objectsBefore.concat(objectsAfter)


    const MobileSections = mobileCopy.map((section) => {
        return <HeaderProps key={section.id} {...section} />;
    });

    const DesktopSections = HeaderData.slice(1).map((section) => {
        return <HeaderProps key={section.id} {...section} />;
    });

    return (
        <>
            <div>
                {/* mobile view */}
                {matchMobile && (
                    <div className={headerWrapper}>
                        {MobileSections}
                    </div>
                )}
                {/* Desktop View */}
                {!matchMobile && (
                    <div className={headerWrapper}>
                        {DesktopSections}
                    </div>
                )}
            </div>

        </>
    )
}

export default HeaderMap;