const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId, required:true,ref: "user"},
    totalScore:{type:Number, required:true},
    averageTime:{type:String, require:true}
})

const LeaderboardModel = mongoose.model("leaderboard", leaderboardSchema);

module.exports = LeaderboardModel;