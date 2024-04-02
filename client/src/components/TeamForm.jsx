import React, { useEffect, useState } from "react";
import axios from "axios";

const TeamForm = () => {
  const [team, setTeam] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/users?available=${true}`
      );
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const toggleUserSelection = (user) => {
    // Check if the selected user's domain is already present in the team
    const hasDuplicateDomain = selectedUsers.some(
      (selectedUser) => selectedUser.domain === user.domain
    );

    // If there is a duplicate domain, do not add the user to the team
    if (hasDuplicateDomain) {
      alert("Cannot add user with the same domain to the team");
      return;
    }

    // Toggle user selection
    const index = selectedUsers.findIndex(
      (selectedUser) => selectedUser.id === user.id
    );
    if (index === -1) {
      // User not already selected, so add to selectedUsers
      setSelectedUsers([...selectedUsers, user]);
    } else {
      // User already selected, so remove from selectedUsers
      const updatedSelectedUsers = [...selectedUsers];
      updatedSelectedUsers.splice(index, 1);
      setSelectedUsers(updatedSelectedUsers);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-4 gap-3">
        <input
          type="text"
          placeholder="Enter Team Name..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="">Create Team</button>
      </div>
      <div className="my-4 flex justify-center">
        {selectedUsers.map((user) => (
          <div key={user.id} className="flex items-center mb-2">
            <img
              src={user.avatar}
              alt=""
              className="w-10 h-10 object-cover ring-2 rounded-full mr-2"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className={`border border-gray-300 rounded-md p-4 flex items-center justify-between ${
              selectedUsers.find((selectedUser) => selectedUser.id === user.id)
                ? "bg-blue-100"
                : ""
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
              <p className="text-sm text-gray-600">
                {user.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamForm;
