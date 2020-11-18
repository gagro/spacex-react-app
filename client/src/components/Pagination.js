import React from "react";

// Icons
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";

const ChangePage = ({ onClick, image, disabled }) => (
   <div onClick={onClick} style={{ display: disabled && "none" }}>
      <img src={image} alt="Arrow" />
   </div>
)

const Pagination = ({ currentPage, setOffset, totalPages }) => (
   <div className="pagination">
      <ChangePage 
         onClick={() => setOffset(prevState => prevState - 6)} 
         image={leftArrow} 
         disabled={currentPage === 1} 
      />
      { `${currentPage} / ${totalPages}`}
      <ChangePage 
         onClick={() => setOffset(prevState => prevState + 6)} 
         image={rightArrow} 
         disabled={currentPage === totalPages} 
      />
   </div>
)

export default Pagination;