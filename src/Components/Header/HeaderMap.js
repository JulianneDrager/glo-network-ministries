import React from "react";
import HeaderData from "./HeaderData";
import HeaderProps from "./HeaderProps";
import HeaderStyle from "../Header/Header.module.css";

const HeaderMap = () => {
    const headerWrapper = HeaderStyle.headerWrapper;

    const Sections = HeaderData.map((section) => {
        return <HeaderProps key={section.id} {...section} />;
    });

    return (
        <>
            <div className={headerWrapper}>
                {Sections}
            </div>
        </>
    )
};

export default HeaderMap;