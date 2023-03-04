const LeaderboardModel = require("../../Models/Leaderboard.model");

const updateLeaderboard = async(req,res)=> {
    const {prevTime} = req.body;
    const userID = req.userID;
    try {
        const user = await LeaderboardModel.findOne({userID});
        if(user){
            await LeaderboardModel.findByIdAndUpdate({_id:user._id},{win:user.win+1, prevTime});
            return res.send({message: "success", description:"Successfully updated"})
        }else{
            return res.send({message: "failed", description:"Updation Failed"})
        }
        
    } catch (error) {
        res.send({message:error.message})
    }
}

module.exports = updateLeaderboard;