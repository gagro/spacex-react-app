import React from "react";

const IconLink = ({ image, link }) => (
  <a href={link} target="_blank" className="iconLink">
   <img src={image} alt="icon" />
  </a>
);

export default IconLink;