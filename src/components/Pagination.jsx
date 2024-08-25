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
                <Link to=''
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </Link>
            </li>
        ));
    };
    
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={() => onPageChange(currentPage - 1 )} disabled={currentPage === 1}>Previous</button>
        </li>
        <div >
            {renderPaginationLinks()}
        </div>
        <li>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination