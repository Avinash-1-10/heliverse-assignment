import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const TeamForm = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/users?available=${true}&page=${currentPage}`
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

  const toggleUserSelection = (user) => {
    const isSelected = selectedUsers.some(
      (selectedUser) => selectedUser.id === user.id
    );

    if (isSelected) {
      // User is already selected, so remove from selectedUsers
      const updatedSelectedUsers = selectedUsers.filter(
        (selectedUser) => selectedUser.id !== user.id
      );
      setSelectedUsers(updatedSelectedUsers);
    } else {
      // Check if the selected user's domain is already present in the team
      const hasDuplicateDomain = selectedUsers.some(
        (selectedUser) => selectedUser.domain === user.domain
      );

      // If there is a duplicate domain, do not add the user to the team
      if (hasDuplicateDomain) {
        alert("Cannot add user with the same domain to the team");
        return;
      }

      // Add user to selectedUsers
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="absolute w-screen top-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 overflow-scroll">
        <div className="container mx-auto px-4 py-8">
      <form
        className="flex items-center justify-center mb-4 gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Team Name..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 py-2 px-3 rounded-md font-semibold text-white">
          Create Team
        </button>
      </form>
      <div className="my-4 flex justify-center">
        {selectedUsers.map((user) => (
          <div key={user.id} className="flex items-center mb-2">
            <img
              src={user.avatar}
              alt=""
              className="w-10 h-10 object-cover ring-2 rounded-full mr-2 bg-white"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className={`border border-gray-300 rounded-md p-4 flex items-center ${
              selectedUsers.find((selectedUser) => selectedUser.id === user.id)
                ? "bg-teal-100"
                : "bg-white"
            }`}
            onClick={() => toggleUserSelection(user)}
          >
            <img
              src={user.avatar}
              alt=""
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-lg font-semibold">
                {user.first_name} {user.last_name}
              </p>
              <p className="text-sm text-gray-600">{user.domain}</p>
              <p className="text-sm text-green-600">
                {user.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
    </div>
  );
};

export default TeamForm;
