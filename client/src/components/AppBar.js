import React from "react";

// Images
import logo from "../assets/BGMobile.svg"
import homeIcon from "../assets/home.svg";
import launchesIcon from "../assets/launches.svg";
import missionsIcon from "../assets/missions.svg";
import rocketsIcon from "../assets/rockets.svg";
import shipsIcon from "../assets/ships.svg";

// Components
import MeniItem from "./MeniItem";

export const meniItems = [
    {
        path: "/",
        icon: homeIcon,
        text: "Home"
    },
    {
        path: "/launches",
        icon: launchesIcon,
        text: "Launches"
    },
    {
        path: "/missions",
        icon: missionsIcon,
        text: "Missions"
    },
    {
        path: "/rockets",
        icon: rocketsIcon,
        text: "Rockets"
    },
    {
        path: "/ships",
        icon: shipsIcon,
        text: "Ships"
    }
];

const AppBar = () => (
    <div className="header">
        <img src={logo} id="logo" />
        <div className="meni">
            <div className="meniTitle">
                SpaceX <span>Control</span> Center
            </div>
            <div className="meniItems">
                {meniItems.map(item => (
                    <MeniItem item={item} />
                ))}
            </div>
        </div>
    </div>
)

export default AppBar;