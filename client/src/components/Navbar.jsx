import React from "react";
import { FaUserPlus, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ setShowAddForm }) => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4 shadow-md">
      {/* Logo on the left */}
      <div className="flex items-center">
        <h1 className="text-lg font-semibold">U-Manager</h1>
      </div>

      {/* Buttons with icons on the right */}
      <div className="flex items-center gap-5">
        <button className="flex items-center px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
          <Link to={"/team"}>Teams</Link>
        </button>
        <button
          className="flex items-center mr-4 bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md"
          onClick={() => setShowAddForm(true)}
        >
          <FaUserPlus className="mr-2" />
          Add User
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
