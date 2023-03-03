import React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "../Components/Board";
import Error from "../Pages/Error-Page/Error";
import Leaderboard from "../Pages/Leaderboard";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/game" element={<Board />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Allroutes;
