import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  let endPage = Math.min(totalPages, startPage + maxPages - 1);

  // Ensure that maxPages are shown if totalPages is less than maxPages
  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    // Adjust startPage and endPage if current page is near the edges
    if (currentPage <= Math.ceil(maxPages / 2)) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage >= totalPages - Math.floor(maxPages / 2)) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    }
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center my-4 items-center">
      <button
        className={`${
          currentPage === 1
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-white text-gray-700"
        } hover:bg-gray-100 focus:outline-none border border-gray-300 px-3 py-1 rounded-l-md`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>
      {startPage > 1 && <span className="text-gray-700 px-3 py-1">...</span>}
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`${
            number === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          } hover:bg-blue-100 focus:outline-none border border-gray-300 px-3 py-1 rounded-md mx-1`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      {endPage < totalPages && (
        <span className="text-gray-700 px-3 py-1">...</span>
      )}
      <button
        className={`${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-white text-gray-700"
        } hover:bg-gray-100 focus:outline-none border border-gray-300 px-3 py-1 rounded-r-md`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
