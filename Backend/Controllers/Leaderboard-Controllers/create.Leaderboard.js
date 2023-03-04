const LeaderboardModel = require("../../Models/Leaderboard.model");

const createLeaderboard = async(req,res)=> {
    const userID = req.userID;
    try {
        const user = await LeaderboardModel.findOne({userID});
        if(!user){
            await LeaderboardModel.create({userID});
            return res.send({message: "success", description:"Successfully created"})
        }else{
            return res.send({message: "failed", description:"Already created the leaderboard account"})
        }
        
    } catch (error) {
        res.send({message:error.message})
    }
}

module.exports = createLeaderboard;