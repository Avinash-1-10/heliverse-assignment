import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ currentPage = 6, totalPages = 10, onPageChange }) => {
  const pageNumbers = [];
  const maxPages = 5;

  for (let i = 1; i <= Math.min(totalPages, maxPages); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
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
    );
  });

  return (
    <div className="flex justify-center my-4 items-center">
      <FaArrowLeft
        className={`${
          currentPage === 1
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-white text-gray-700"
        } hover:bg-gray-100 focus:outline-none border-gray-300`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />

      {currentPage > maxPages && (
        <span className="text-gray-700 px-3 py-1">...</span>
      )}
      {renderPageNumbers}
      {totalPages > maxPages && currentPage < totalPages - 2 && (
        <span className="text-gray-700 px-3 py-1">...</span>
      )}
      <FaArrowRight
        className={`${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-white text-gray-700"
        } hover:bg-gray-100  border-gray-300`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
