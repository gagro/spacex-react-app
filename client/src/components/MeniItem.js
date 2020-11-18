import React from "react";

import { NavLink } from "react-router-dom";

const MeniItem = ({ item: { path, icon, text } }) => (
   <NavLink
      to={path}
      exact
      className="meniNavLink"
      activeStyle={{ borderBottom: "2px solid #000" }}
   >
      <div className="appBarItem">
         <img alt="Icon" src={icon} />
         <div>{text}</div>
      </div>
   </NavLink>
);

export default MeniItem;