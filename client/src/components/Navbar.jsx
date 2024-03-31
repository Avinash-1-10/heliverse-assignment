import React from 'react';
import { FaUserPlus, FaUsers } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4 shadow-md">
      {/* Logo on the left */}
      <div className="flex items-center">
        <h1 className="text-lg font-semibold">My App</h1>
      </div>

      {/* Buttons with icons on the right */}
      <div className="flex items-center">
        <button className="flex items-center mr-4 bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md">
          <FaUserPlus className="mr-2" />
          Add User
        </button>
        <button className="flex items-center bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md">
          <FaUsers className="mr-2" />
          Add Team
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
