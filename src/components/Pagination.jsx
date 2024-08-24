import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({onPageChange, currentPage, blogs, pageSize}) => {
     const totalPages = Math.ceil(blogs.length / pageSize);

    const renderPaginationLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li
                className={pageNumber === currentPage ? "activerPagination" : ""}
                key={pageNumber}
            >
                <button
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
            </li>
        ));
    };
    
  return (
    <ul>
        <li>
            <button onClick={() => onPageChange(currentPage - 1 )} disabled={currentPage === 1}>Previous</button>
        </li>
        <li>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination