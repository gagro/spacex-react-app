import React from "react";

// Images
import noImage from "../assets/no-image.png"

// Link icons
import webIcon from "../assets/www.svg"

//Components
import IconLink from "../components/IconLink";

const Ship = ({ item }) => {
   const {
      ship_name,
      ship_type,
      roles,
      weight_kg,
      year_built,
      active,
      url,
      image,
      missions
   } = item;

   return (
      <div className="contentContainer">
         <div className="contentTitle">
            <strong>{`${ship_name} (${ship_type})`}</strong>
            <div className="contentTitleInfo">
               <span>Year built</span>
               {year_built || "N/A"}
            </div>
         </div>
         <div className="content">
            <div className="launchDetails">
               <ul className="contentList">
                  <li>
                     Roles: {" "}
                     {roles.map(role => (
                        <strong
                           className="itemList"
                           key={role}
                        >
                           {role}
                        </strong>
                     ))}
                  </li>
                  <li>
                     Weight:
                     <strong>
                        {weight_kg ? `${weight_kg} kg` : "N/A"}
                     </strong>
                  </li>
                  <li>
                     Missions: {" "}
                     {missions.map(mission => (
                        <strong
                           className="itemList"
                           key={mission}
                        >
                           {mission}
                        </strong>
                     ))}
                  </li>
               </ul>
            </div>
         </div>
         <img src={image || noImage} alt="Image" />
         <div className="contentLinks" style={{ paddingTop: "20px" }}>
            <div
               className="contentStatus"
               style={{ backgroundColor: active ? "#39a857" : "#9B0000" }}
            >
               {active ? "Active" : "Inactive"}
            </div>
            {url && (
               <IconLink image={webIcon} link={url} />
            )}
         </div>
      </div>
   )
}

export default Ship;