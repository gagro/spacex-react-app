import React from "react";

// Images
import logo from "../assets/spacex-logo.png"
import launchesIcon from "../assets/launches.png";
import missionsIcon from "../assets/missions.png";
import rocketsIcon from "../assets/rockets.png";

// Components
import MeniItem from "./MeniItem";

export const meniItems = [
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
    }
];

const Sidebar = () => (
    <aside className="sidebar">
        <img alt="Logo" src={logo} className="sidebarLogo" />
        {meniItems.map(item => <MeniItem item={item} key={Math.random()} />)}
    </aside>
)

export default Sidebar;