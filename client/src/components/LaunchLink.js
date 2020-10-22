import React from "react";
import { useHistory } from "react-router-dom";

const LaunchLink = ({ launch: { mission_name, flight_number } }) => {
    const history = useHistory();

    return (
        <div onClick={() => history.push(`/launch/${flight_number}`)}>{mission_name}</div>
    )
};

export default LaunchLink;