const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//initialise middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/dives", require("./routes/dives"));

module.exports = app;
