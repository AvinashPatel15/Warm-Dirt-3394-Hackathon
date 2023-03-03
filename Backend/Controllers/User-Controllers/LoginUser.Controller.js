require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { UserModel } = require("../../Models/User.Model");
const { validationResult } = require("express-validator");
const { TokenModel } = require("../../Models/Token.Model");
const sendEmail = require("../../Utils/sendEmail");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    /** Checking Required Fields */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).send({ message: errors.array()[0].msg });
    }
    /** We Are Checking Your Mail Is In DataBase Or Not */
    const user = await UserModel.findOne({ email });
    if (user) {
      /** Compare My Hash Password With The Help Of Bcrypt.compare */
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          /** And we are checking that is the user is not verify then we are sending another mail */
          if (!user.isVerified) {
            let token = await TokenModel.findOne({ userID: user._id });
            /** Checking If The User Is Not Verify Then Creating A Another Token For Verify User */
            if (!token) {
              token = await new TokenModel({
                userID: user._id,
                token: crypto.randomBytes(32).toString("hex"),
              }).save();

              /** Create A URL For Verify Email */
              const url = `${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`;
              await sendEmail(user.email, "Verify Email", url, user.first_name);
            }
            return res.status(401).send({
              message: "Before Login Please Verify Your Account!",
            });
          }
          /** Generate The Token With Help Of JWT It Gives You One Token When Ever User Is Login */
          const token = jwt.sign({ userID: user._id }, process.env.JWTKey);

          res.send({
            message: "Login Successfully!",
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            token: token,
          });
        } else {
          res
            .status(401)
            .send({ message: "Your Email And Password Is Wrong", err });
        }
      });
    } else {
      res.status(401).send({ message: "Email Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginUser,
};
