import React, { useState } from "react";
import { FaEnvelope, FaGenderless, FaUserCog, FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import UserForm from "./UserForm";

const UserCard = ({ user }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
        <div className="pt-3 flex items-center justify-center">
          <img
            className={`w-16 h-16 object-cover rounded-full ring-[3px] ${
              user.available ? "ring-green-500" : "ring-red-500"
            }`}
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
          />
        </div>
        <div className="px-6 py-2">
          <div className="flex items-center justify-center">
            <div className="font-bold text-xl">{`${user.first_name} ${user.last_name}`}</div>
          </div>
          <hr className="mt-1" />
          <div className="flex justify-between mt-4">
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="mr-2 text-blue-800" />
              <p className="text-sm">{user.email}</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex items-center text-gray-700">
              <FaUserCog className="mr-2 text-purple-800" />
              <p className="text-sm">{user.domain}</p>
            </div>
            <div className="flex items-center text-gray-700">
              <FaGenderless className="mr-2 text-pink-800" />
              <p className="text-sm">{user.gender}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div
              className={`px-2 inline-flex items-center text-xs leading-4 font-semibold rounded-full ${
                user.available
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {user.available ? "Available" : "Not Available"}
            </div>
            <div
              className="flex items-center "
              
            >
              <FaEdit className="mr-2 cursor-pointer text-gray-600" onClick={() => setShowEditForm(true)}/>
              <MdDeleteOutline className="text-xl cursor-pointer text-red-500"/>
            </div>
          </div>
        </div>
      </div>
      {showEditForm && <UserForm closeForm={() => setShowEditForm(false)} user={user}/>}
    </>
  );
};

export default UserCard;
