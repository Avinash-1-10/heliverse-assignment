import React, { useEffect, useState } from "react";
import UserFilters from "../components/UserFilters";
import Cards from "../components/Cards";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [gender, setGender] = useState("");
  const [isAvailable, setIsAvailable] = useState("");
  const [reload, setReload] = useState(false);


  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/users?page=${currentPage}&name=${name}&gender=${gender}&domain=${domain}&available=${isAvailable}`
      );
      setUsers(data.users);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [name, gender, domain, isAvailable]);

  useEffect(() => {
    getUsers();
  }, [currentPage, name, gender, domain, isAvailable, reload]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <UserFilters
        setName={setName}
        setDomain={setDomain}
        setGender={setGender}
        setIsAvailable={setIsAvailable}
        setReload={setReload}
      />
      <Cards
        users={users}
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        setReload={setReload}
      />
    </div>
  );
};

export default User;
