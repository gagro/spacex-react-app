import React from "react";

// Icons
import wikipediaIcon from "../assets/wikipedia.svg";
import webIcon from "../assets/www.svg";
import twitterIcon from "../assets/twitter.svg"

// Components
import IconLink from "./IconLink";

const Mission = ({ item }) => {
   const {
      mission_name,
      mission_id,
      manufacturers,
      wikipedia,
      website,
      twitter
   } = item;

   return (
      <div className="missionContainer">
         <div className="missionInfo">
            <div>
               <strong>{mission_name}</strong>{" "}
               {mission_id}{" "}
            </div>
            <div>
               Manufacturers:{" "}
               {manufacturers.map(manufaturer => (
                  <strong 
                     className="itemList" 
                     key={manufaturer}
                  >
                     {manufaturer}
                  </strong>
               ))}
            </div>
         </div>
         <div className="missionLinks">
            <IconLink image={webIcon} link={website} />
            <IconLink image={twitterIcon} link={twitter} />
            <IconLink image={wikipediaIcon} link={wikipedia} />
         </div>
      </div>
   )
}

export default Mission;