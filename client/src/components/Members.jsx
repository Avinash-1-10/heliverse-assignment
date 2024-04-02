import React, { useEffect, useState } from "react";
import axios from "axios";

const Members = ({ member }) => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/users/${member}`
      );
      setUser(data);
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden min-w-[300px]">
      <div className="flex justify-center items-center p-3">
        <img
          className="w-20 h-20 border rounded-full"
          src={user?.avatar}
          alt={`${user?.first_name} ${user?.last_name}`}
        />
      </div>
      <div className="py-2 px-6">
        <h2 className="text-lg font-semibold text-gray-800">
          {user?.first_name} {user?.last_name}
        </h2>
        <p className="text-sm text-gray-600 mt-1">{user?.email}</p>
        <p className="text-sm text-gray-600 mt-1">Gender: {user?.gender}</p>
        <p className="text-sm text-gray-600 mt-1">Domain: {user?.domain}</p>
        <p className="text-sm text-gray-600 mt-1">
          Available: {user?.available ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default Members;
