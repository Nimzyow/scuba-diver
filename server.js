const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();

//initialise middlware
app.use(express.json({ extended: false }));

app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));
app.use("/dives", require("./routes/dives"));

module.exports = app;
