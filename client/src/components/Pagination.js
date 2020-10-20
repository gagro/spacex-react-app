import React from "react";

// Images
import leftArrow from '../assets/left-chevron.png';
import rightArrow from "../assets/right-arrow.png"

const ChangePage = ({ onClick, image, disabled }) => (
    <div onClick={onClick} style={{ display: disabled && "none" }}>
        <img src={image} alt="Arrow" />
    </div>
)

const Pagination = ({ currentPage, setOffset, totalPages }) => (
    <div className="pagination">
        <ChangePage onClick={() => setOffset(prevState => prevState - 10)} image={leftArrow} disabled={currentPage === 1} />
        { `${currentPage} / ${totalPages}`}
        <ChangePage onClick={() => setOffset(prevState => prevState + 10)} image={rightArrow} disabled={currentPage === totalPages} />
    </div>
)

export default Pagination;