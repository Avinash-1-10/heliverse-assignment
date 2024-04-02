import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import UserFilters from "./components/UserFilters";
import Navbar from "./components/Navbar";

import UserForm from "./components/UserForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Team from "./pages/Team";

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <BrowserRouter>
      <Navbar setShowAddForm={setShowAddForm} />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      {showAddForm && <UserForm closeForm={() => setShowAddForm(false)} />}
    </BrowserRouter>
  );
};

export default App;
