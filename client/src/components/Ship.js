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
        <div className="launchContainer">
            <div className="launchTitle">
                <strong>{`${ship_name} (${ship_type})`}</strong>
                <div className="rocketFirstLaunch">
                    <span>Year built</span>
                    {year_built || "N/A"}
                </div>
            </div>
            <div className="launchContent">
                <div className="launchDetails">
                    <ul className="launchList">
                        <li>
                            Roles: {" "}
                            {roles.map(role => (
                                <strong>{role}</strong>
                            ))}
                        </li>
                        <li>
                            Weight: <strong>{weight_kg} kg</strong>
                        </li>
                        <li>
                            Missions: {" "}
                            {missions.map(mission => (
                                <strong>{mission}, </strong>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
            <img src={image || noImage} alt="Image" />
            <div className="launchLinks">
                <div className="launchStatus" style={{ backgroundColor: active ? "#39a857" : "#9B0000" }}>
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