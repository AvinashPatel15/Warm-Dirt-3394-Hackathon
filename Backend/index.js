const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./Configs/db");
const { userRouter } = require("./Routes/User.Route");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

/** Welcome Page */
app.get("/", (req, res) => {
  res.send("Welcome To Tech Memory Game Server");
});

/** User Router */
app.use("/users", userRouter);

/** For Listening The Port */
app.listen(port, async () => {
  connection();
  console.log(`Server listening on ${port}`);
});