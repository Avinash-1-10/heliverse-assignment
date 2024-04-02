import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4 shadow-md px-2 md:px-40">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold" ><Link to={"/"}>U-Manager</Link></h1>
      </div>


      <div className="flex items-center gap-5">
        <button className="flex items-center px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
          <Link to={"/"}>Users</Link>
        </button>
        <button className="flex items-center px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
          <Link to={"/team"}>Teams</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
