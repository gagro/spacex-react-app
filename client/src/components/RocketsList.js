import React from "react";

const RocketsList = ({ items }) => (
    <>
        {items.map(item => (
            <div key={Math.random()}>{item.rocket_name}</div>
        ))}
    </>
)

export default RocketsList