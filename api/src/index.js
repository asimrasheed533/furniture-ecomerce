const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// api config
dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(cors());

// db config
mongoose.connect(process.env.MONOGOURL, () => {
  try {
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
});
// api routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// listen
app.listen(port, () => console.log(`api working:${port}/`));
