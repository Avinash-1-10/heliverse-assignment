import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import UserForm from "./UserForm";

const domains = [
  "Sales",
  "IT",
  "Marketing",
  "Business Development",
  "Management",
  "UI Designing",
  "Finance",
]

const genders = [
  "Male",
  "Agender",
  "Polygender",
  "Bigender",
  "Genderqueer",
  "Genderfluid",
  "Non-binary",
  "Female",
]

const UserFilters = ({
  setName,
  setDomain,
  setGender,
  setIsAvailable,
  setReload
}) => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <>
    <div className="flex flex-wrap items-center justify-between  p-4 rounded-md shadow-md mb-4">
      <input
        type="text"
        placeholder="Search by Name"
        className="w-full md:w-1/3 p-2 mb-2 md:mb-0 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        onChange={(e) => setName(e.target.value)}
      />
      <select
        className="w-full md:w-auto p-2 mb-2 md:mb-0 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        onChange={(e) => setDomain(e.target.value)}
      >
        <option value="">All Domains</option>
        {domains.map((domain, index) => (
          <option key={index} value={domain}>
            {domain}
          </option>
        ))}
      </select>
      <select
        className="w-full md:w-auto p-2 mb-2 md:mb-0 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">All Genders</option>
        {genders.map((gender, index) => (
          <option key={index} value={gender}>
            {gender}
          </option>
        ))}
      </select>
      <select
        className="w-full md:w-auto p-2 mb-2 md:mb-0 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        onChange={(e) =>
          setIsAvailable(e.target.value)
        }
      >
        <option value="">All Availability</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>

      <button
          className="flex items-center mr-4 bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md text-white"
          onClick={() => setShowAddForm(true)}
        >
          <FaUserPlus className="mr-2" />
          Add User
        </button>
    </div>
    {showAddForm && <UserForm closeForm={()=>setShowAddForm(false)} setReload={setReload}/>}
    </>
  );
};

export default UserFilters;
