import React, { useEffect, useState } from "react";
import UserCard from "./UserCard"; // Assuming users data is imported correctly
import Pagination from "./Pagination";

const Cards = ({ users, totalPages, currentPage, handlePageChange }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Cards;
