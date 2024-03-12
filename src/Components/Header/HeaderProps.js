import React from "react";

const HeaderProps = (props) => {

    return (
        <div className={props.className}>
            {props.section}
        </div>
    )
};

export default HeaderProps;