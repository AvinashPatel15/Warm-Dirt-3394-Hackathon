const express = require("express");
const createLeaderboard = require("../Controllers/Leaderboard-Controllers/create.Leaderboard");
const getLeaderboard = require("../Controllers/Leaderboard-Controllers/get.Leaderboard");
const updateLeaderboard = require("../Controllers/Leaderboard-Controllers/update.Leaderboard");

const leaderboard = express.Router();

leaderboard.get("/", getLeaderboard);
leaderboard.post("/add", createLeaderboard);
leaderboard.patch("/update", updateLeaderboard);

module.exports = {leaderboard};