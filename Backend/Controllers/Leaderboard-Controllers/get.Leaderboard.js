const LeaderboardModel = require("../../Models/Leaderboard.model")

const getLeaderboard = async(req,res)=> {
    try {
        const leaderboard = await LeaderboardModel.find();
        res.send(leaderboard);
    } catch (error) {
        res.send({
            message:error.message
        });
    }
}

module.exports = getLeaderboard;