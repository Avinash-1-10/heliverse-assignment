import React from "react";
import UserCard from "./UserCard";
import { users } from "../data/users"; // Assuming users data is imported correctly
import Pagination from "./Pagination";

const Cards = () => {
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
        {users.slice(0, 20).map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default Cards;
