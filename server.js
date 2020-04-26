const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello world!" });
});

app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));
app.use("/dives", require("./routes/dives"));

module.exports = app;
