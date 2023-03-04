const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId, required:true,ref: "user"},
    win:{type:Number, default:0, required:true},
    prevTime:{type:String, default:0, require:true}
})

const LeaderboardModel = mongoose.model("leaderboard", leaderboardSchema);

module.exports = LeaderboardModel;