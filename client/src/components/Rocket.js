import React from "react";
import { Link } from "react-router-dom";

// Link icons
import wikipediaIcon from "../assets/wikipedia.svg"

// Components
import IconLink from "../components/IconLink";

const RocketDetails = ({ children }) => (
  <div className="launchDetails">
    <ul className="launchList">
      {children}
    </ul>
  </div>
)

const Rocket = ({ item }) => {
  const {
    rocket_name,
    rocket_type,
    first_flight,
    cost_per_launch,
    success_rate_pct,
    active,
    company,
    height,
    mass,
    diameter,
    wikipedia
  } = item;

  return (
    <div className="launchContainer">
      <div className="launchTitle">
        <strong>{`${rocket_name} (${rocket_type})`}</strong>
        <div className="rocketFirstLaunch">
          <span>First launch</span>
          {first_flight}
        </div>
      </div>
      <div className="launchContent">
        <RocketDetails>
          <li>
            Height: <strong>{height} m</strong>
          </li>
          <li>
            Diameter: <strong>{diameter} m</strong>
          </li>
          <li>
            Mass: <strong>{mass} kg</strong>
          </li>
        </RocketDetails>
        <RocketDetails>
          <li>
            Company: <strong>{company}</strong>
          </li>
          <li>
            CPL: <strong>{cost_per_launch} $</strong>
          </li>
          <li>
            SRC: <strong>{success_rate_pct} %</strong>
          </li>
        </RocketDetails>
      </div>
      <div className="launchLinks" style={{ justifyContent: "unset" }}>
        <div className="launchStatus" style={{ backgroundColor: active ? "#39a857" : "#9B0000" }}>
          {active ? "Active" : "Inactive"}
        </div>
        {wikipedia && (
          <IconLink image={wikipediaIcon} link={wikipedia} />
        )}
      </div>
    </div>
  )
}

export default Rocket;