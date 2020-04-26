const express = require("express");
const router = express.Router();

//route   POST    /users
//desc    registers a new user
//access  public
router.post("/", (req, res) => {
  res.send("users POST request");
});

module.exports = router;
