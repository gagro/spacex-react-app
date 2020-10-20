import React from "react";

import { NavLink } from "react-router-dom";

const MeniItem = ({ item: { path, icon, text } }) => (
    <NavLink to={path} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="sidebarItem">
            <img alt="Icon" src={icon} />
            <div >{text}</div>
        </div>
    </NavLink>
);

export default MeniItem;