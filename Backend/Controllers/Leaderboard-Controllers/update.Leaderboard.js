const LeaderboardModel = require("../../Models/Leaderboard.model");

const updateLeaderboard = async()=> {
    const payload = req.body;
    const userID = req.userID;
    try {
        const user = await LeaderboardModel.findOne({userID});
        if(!user){
            res.send({message: "failed", description:"Updation Failed"})
        }else{
            await LeaderboardModel.findByIdAndUpdate({userID},payload);
            res.send({message: "success", description:"Successfully updated"})
        }
        
    } catch (error) {
        res.send({message:error.message})
    }
}

module.exports = updateLeaderboard;