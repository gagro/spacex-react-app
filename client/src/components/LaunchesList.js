import React from "react";

// Components
import LaunchLink from "./LaunchLink";

const LaunchesList = ({ items }) => (
    <>
        {items.map(item => (
            <LaunchLink key={Math.random()} launch={item} />
        ))}
    </>
)

export default LaunchesList;