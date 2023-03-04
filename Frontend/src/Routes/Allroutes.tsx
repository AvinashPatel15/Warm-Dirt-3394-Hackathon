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
import PrivateRoute from "./PrivateRoute";

const Allroutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />

      <Route
        path="/leaderboard"
        element={
          <PrivateRoute>
            <Leaderboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/game"
        element={
          <PrivateRoute>
            <Board />
          </PrivateRoute>
        }
      />

      <Route
        path="/gamewon"
        element={
          <PrivateRoute>
            <GameWon />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />

      <Route path="/sign-up" element={<Signup />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Allroutes;
