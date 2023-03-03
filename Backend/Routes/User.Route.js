const express = require("express");
require("dotenv").config();
const { body } = require("express-validator");
const {
  loginUser,
} = require("../Controllers/User-Controllers/LoginUser.Controller");
const {
  registerUser,
} = require("../Controllers/User-Controllers/registerUser.Controller");
const {
  verifyEmail,
} = require("../Controllers/User-Controllers/VerifyEmail.Controller");

const userRouter = express.Router();

/** For New User */

userRouter.post(
  "/register",
  [
    body("first_name", "Please Enter Your First Name").not().isEmpty(),
    body("last_name", "Please Enter Your Last Name").not().isEmpty(),
    body("email", "Please Enter A Valid Email Address").isEmail(),
    body("password", "Password Must Be 8 Characters").isLength({ min: 8 }),
  ],
  registerUser
);

/** For Verify Email With The Link */

userRouter.get("/:id/verify/:token", verifyEmail);

/** For Login */

userRouter.post(
  "/login",
  /** Checking Required Fields */
  [
    body("email", "Enter A Valid Email").isEmail().not(),
    body("password", "Enter A Correct Password").not().isEmpty(),
  ],
  loginUser
);

module.exports = {
  userRouter,
};
