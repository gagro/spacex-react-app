import React from "react";

const Pagination = ({ currentPage, setOffset, totalPages }) => (
    <>
        <button type="button" disabled={currentPage === 1} onClick={() => setOffset(prevState => prevState - 10)}>DISI</button>
        { `${currentPage} / ${totalPages}`}
        <button type="button" disabled={currentPage === totalPages} onClick={() => setOffset(prevState => prevState + 10)}>Ev</button>
    </>
)

export default Pagination;