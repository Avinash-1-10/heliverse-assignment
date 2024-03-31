import React, { useState } from "react";

const UserFilters = ({
  domains = ["Domain1", "Domain2"],
  genders = ["Male", "Female"],
  onFilterChange = () => {},
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    domain: null,
    gender: null,
    available: null,
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onFilterChange({ ...selectedFilters, searchQuery: event.target.value });
  };

  const handleFilterChange = (filter, value) => {
    setSelectedFilters({ ...selectedFilters, [filter]: value });
    onFilterChange({ ...selectedFilters, [filter]: value, searchQuery });
  };

  return (
    <div className="flex flex-wrap items-center justify-between  p-4 rounded-md shadow-md mb-4">
      <input
        type="text"
        placeholder="Search by Name"
        className="w-full md:w-1/3 p-2 mb-2 md:mb-0 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <select
        className="w-full md:w-auto p-2 mb-2 md:mb-0 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        onChange={(e) => handleFilterChange("domain", e.target.value)}
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
        onChange={(e) => handleFilterChange("gender", e.target.value)}
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
          handleFilterChange("available", e.target.value === "true")
        }
      >
        <option value="">All Availability</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
    </div>
  );
};

export default UserFilters;
