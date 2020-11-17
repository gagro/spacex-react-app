import React from "react";

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
            <div>
                <div>
                    <strong>{mission_name}</strong>{" "}
                    {mission_id}{" "}
                </div>
                <div>
                    Manufacturers:{" "}
                    {manufacturers.map(manufaturer => (
                        <strong>{manufaturer}</strong>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mission;