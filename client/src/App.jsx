import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import UserFilters from "./components/UserFilters";
import Navbar from "./components/Navbar";
import axios from "axios";
import UserForm from "./components/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [gender, setGender] = useState("");
  const [isAvailable, setIsAvailable] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  console.log(isAvailable);

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
  }, [currentPage, name, gender, domain, isAvailable]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar setShowAddForm={setShowAddForm}/>
      <UserFilters
        setName={setName}
        setDomain={setDomain}
        setGender={setGender}
        setIsAvailable={setIsAvailable}
      />
      <Cards
        users={users}
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {showAddForm && <UserForm closeForm={() => setShowAddForm(false)} />}
    </div>
  );
};

export default App;
