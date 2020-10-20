import React from "react";

const MissionsList = ({ items }) => (
    <>
        {items.map(item => (
            <div key={Math.random()}>{item.mission_name}</div>
        ))}
    </>
)

export default MissionsList;