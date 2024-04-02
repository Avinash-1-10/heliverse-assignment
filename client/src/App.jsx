import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Team from "./pages/Team";
import TeamDetail from "./components/TeamDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
