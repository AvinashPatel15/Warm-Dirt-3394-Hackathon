const LeaderboardModel = require("../../Models/Leaderboard.model")

const getLeaderboard = async(req,res)=> {
    const {sort}=req.query;
    try {
        const leaderboard = await LeaderboardModel.find().populate(["userID"]).sort(sort == "high" ? { win: -1 } : { win: 1 });
        res.send(leaderboard);
    } catch (error) {
        res.send({
            message:error.message
        });
    }
}

module.exports = getLeaderboard;