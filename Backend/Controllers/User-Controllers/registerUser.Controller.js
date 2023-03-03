require("dotenv").config();
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { validationResult } = require("express-validator");
const { TokenModel } = require("../../Models/Token.Model");
const { UserModel } = require("../../Models/User.Model");
const sendEmail = require("../../Utils/sendEmail");

const registerUser = async (req, res) => {
  try {
    /** Checking All The Fields Are Validate Or Not */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ message: errors.array()[0].msg });
    }
    const { first_name, last_name, email, password, isVerified } = req.body;

    /** Validate User */
    let ValidatorUser = await UserModel.findOne({ email: email });
    if (ValidatorUser) {
      res.status(401).send({
        message: "Please Enter Another Email This Email Is Already Exist!",
      });
    } else {
      /** Protect The User Password With The Help Of Bcrypt It Convert Your Password To Hash Password Which Is Stored In Our DataBase */
      bcrypt.hash(password, 8, async (err, hash_password) => {
        if (err) {
          console.log(err);
        } else {
          const user = await UserModel.create({
            first_name,
            last_name,
            email,
            password: hash_password,
            isVerified,
          });

          /** Create A Token Using UserID And Crypto */
          const token = await new TokenModel({
            userID: user._id,
            token: crypto.randomBytes(32).toString("hex"),
          }).save();

          /** Create A URL For Verify Account */
          const url = `${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`;
          await sendEmail(user.email, "Verify Email", url, user.first_name);
          res.send({
            message: "Please Check Your Mail To Verify Your Account!",
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerUser,
};
