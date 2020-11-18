import React from "react";

// Link icons
import wikipediaIcon from "../assets/wikipedia.svg"
import youtubeIcon from "../assets/youtube.svg"

//Components
import IconLink from "../components/IconLink";

const Launch = ({ item }) => {
   const {
      mission_name,
      launch_date_local,
      launch_success,
      rocket: {
         rocket_name,
         rocket_type
      },
      launch_site: {
         site_name
      },
      links: {
         wikipedia,
         video_link,
         mission_patch_small
      }
   } = item;

   const date = new Date(launch_date_local);
   const launchDate =
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}
      ${("0" + date.getHours()).substr(-2)}:${("0" + date.getMinutes()).substr(-2)}`;

   return (
      <div className="contentContainer">
         <div className="contentTitle">
            <strong>{mission_name}</strong>
            <span>{launchDate}</span>
         </div>
         <div className="content">
            <div className="launchDetails">
               <ul className="contentList">
                  <li>
                     Rocket: <strong>{rocket_name}</strong>
                  </li>
                  <li>
                     Rocket type: <strong>{rocket_type}</strong>
                  </li>
                  <li>
                     Launch site: <strong>{site_name}</strong>
                  </li>
               </ul>
               <div className="contentLinks">
                  <div
                     className="contentStatus"
                     style={{ backgroundColor: launch_success ? "#39a857" : "#9B0000" }}
                  >
                     {launch_success ? "Successful" : "Failed"}
                  </div>
                  {wikipedia && (
                     <IconLink image={wikipediaIcon} link={wikipedia} />
                  )}
                  {video_link && (
                     <IconLink image={youtubeIcon} link={video_link} />
                  )}
               </div>
            </div>
            {mission_patch_small && (
               <img
                  src={mission_patch_small}
                  alt="Image"
                  style={{ height: "6em" }}
               />
            )}
         </div>
      </div>
   )
}

export default Launch;