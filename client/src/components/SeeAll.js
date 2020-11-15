import React from "react";
import { Link } from "react-router-dom";

// Arrow
import rightArrow from "../assets/right-arrow.svg"

const SeeAll = ({ link, text }) => (
  <div className="seeAllLink">
    <span>{text}</span>
    <Link to={link}>
      See all
      <img alt="Right arrow" src={rightArrow} />
    </Link>
  </div>
)

export default SeeAll;