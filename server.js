const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const app = express();

connectDB();

//initialise middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));
app.use("/dives", require("./routes/dives"));

module.exports = app;
