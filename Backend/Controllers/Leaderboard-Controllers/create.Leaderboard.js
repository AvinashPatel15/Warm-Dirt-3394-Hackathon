const LeaderboardModel = require("../../Models/Leaderboard.model");

const createLeaderboard = async()=> {
    const payload = req.body;
    try {
        await new LeaderboardModel.create(payload);
        res.send({message: "success", description:"Successfully created"})
        
    } catch (error) {
        res.send({message:error.message})
    }
}

module.exports = createLeaderboard;