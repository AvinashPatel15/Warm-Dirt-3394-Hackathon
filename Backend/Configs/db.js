const mongoose = require("mongoose");
require("dotenv").config();

const MongoDB_URL = process.env.DATABASE_URL;

const connection = () => {
  mongoose
    .connect(MongoDB_URL)
    .then(() => {
      console.log({ message: "Connection Successfully!" });
    })
    .catch((error) => {
      console.log({ message: "Connection Error!", error });
    });
};

mongoose.set("strictQuery", false);

module.exports = {
  connection,
};
