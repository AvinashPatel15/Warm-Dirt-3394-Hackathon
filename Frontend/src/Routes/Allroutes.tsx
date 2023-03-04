import React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "../Components/Board";
import EmailVerify from "../Pages/Email-Verify/EmailVerify";
import Error from "../Pages/Error-Page/Error";
import GameWon from "../Pages/Game-won/GameWon";
import HomePage from "../Pages/Homepage";
import Leaderboard from "../Pages/Leaderboard";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/game" element={<Board />} />
      <Route path="/gamewon" element={<GameWon/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Allroutes;
