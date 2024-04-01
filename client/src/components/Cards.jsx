import React, { useEffect, useState } from "react";
import UserCard from "./UserCard"; // Assuming users data is imported correctly
import Pagination from "./Pagination";
import axios from "axios";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/users?page=${currentPage}`
      );
      setUsers(data.users);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
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
