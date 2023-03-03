const { TokenModel } = require("../../Models/Token.Model");
const { UserModel } = require("../../Models/User.Model");

const verifyEmail = async (req, res) => {
  try {
    /** Checking The User is Exist In Our server or Not */
    const user = await UserModel.findOne({ _id: req.params.id });
    if (!user) return res.status(401).send({ message: "Invalid Link" });

    /** Checking the Token */
    const token = await TokenModel.findOne({
      userID: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(401).send({ message: "Invalid Link" });

    /** If The User Is Verify There Account Then isVerified Value Will Change false To true */
    await UserModel.findByIdAndUpdate({ _id: user._id }, { isVerified: true });
    /** If The User Is Verified There Account Then Token Is Deleted Automatically */
    await TokenModel.remove();

    res.send({ message: "Email Verified Successfully" });
  } catch (error) {
    console.log({ message: "Internal Server Error", error });
  }
};

module.exports = {
  verifyEmail,
};
