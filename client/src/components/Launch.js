import React from "react";

// Link icons
import wikipediaIcon from "../assets/wikipedia.svg"
import youtubeIcon from "../assets/youtube.svg"

const Launch = ({ item }) => {
    const {
        mission_name,
        launch_date_unix,
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

    const date = new Date(launch_date_unix);
    const launchDate =
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}
            ${date.getHours()}:${date.getMinutes()}`;

    return (
        <div className="launchContainer">
            <div className="launchTitle">
                <strong>{mission_name}</strong>
                <span>{launchDate}</span>
            </div>
            <div className="launchContent">
                <div className="launchDetails">
                    <ul className="launchList">
                        <li>
                            Rocket: <strong>{rocket_name}</strong>
                        </li>
                        <li>
                            Rocket type: <strong>{rocket_type}</strong>
                        </li>
                        <li>
                            Luanch site: <strong>{site_name}</strong>
                        </li>
                    </ul>
                    <div className="launchLinks">
                        <div className="launchStatus" style={{ backgroundColor: launch_success ? "#39a857" : "#9B0000" }}>
                            {launch_success ? "Successful" : "Failed"}
                        </div>
                        {wikipedia && (
                            <a href={wikipedia} target="_blank" style={{ textDecoration: "none" }}>
                                <img src={wikipediaIcon} alt="Wikipedia" />
                            </a>
                        )}
                        {video_link && (
                            <a href={video_link} target="_blank" style={{ textDecoration: "none" }}>
                                <img src={youtubeIcon} alt="Youtube" />
                            </a>
                        )}
                    </div>
                </div>
                {mission_patch_small && <img src={mission_patch_small} alt="Image" style={{ height: "6em" }} />}
            </div>
        </div>
    )
}

export default Launch;