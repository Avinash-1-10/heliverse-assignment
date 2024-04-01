import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const domains = [
  "Sales",
  "IT",
  "Marketing",
  "Business Development",
  "Management",
  "UI Designing",
  "Finance",
];
const genders = [
  "Male",
  "Agender",
  "Polygender",
  "Bigender",
  "Genderqueer",
  "Genderfluid",
  "Non-binary",
  "Female",
];

const UserForm = ({ closeForm, user }) => {
  const [formData, setFormData] = useState({
    firstName: user?.first_name || "",
    lastName: user?.last_name || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
    gender: user?.gender || "",
    domain: user?.domain || "",
    availability: user?.available || "",
  });
  if(user){
    formData.availability = user.available
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData); // Replace with your form submission logic
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      avatar: "",
      gender: "",
      domain: "",
      availability: "",
    });
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 overflow-hidden"
      onClick={closeForm}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col space-y-4 w-full max-w-md mx-auto px-4 py-8 rounded-lg bg-white shadow-md"
      >
        <IoMdClose
          className="absolute top-5 right-5 text-xl cursor-pointer"
          onClick={closeForm}
        />
        <div className="flex flex-col space-y-1">
          <label htmlFor="firstName" className="text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="avatar" className="text-sm font-medium">
            Avatar URL
          </label>
          <input
            type="url"
            id="avatar"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="gender" className="text-sm font-medium">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 focus:outline- none focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select Gender</option>
            {genders.map((gender, index) => (
              <option key={index} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="domain" className="text-sm font-medium">
            Domain
          </label>
          <select
            id="domain"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select Domain</option>
            {domains.map((domain, index) => (
              <option key={index} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="availability" className="text-sm font-medium">
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          >
            <option value="">Select Availability</option>
            <option value={true}>Available</option>
            <option value={false}>Not Available</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
