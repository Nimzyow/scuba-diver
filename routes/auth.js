const express = require("express");
const router = express.Router();

//route   POST  /auth
//desc    logs in user
//access  public
router.post("/", (req, res) => {
  res.send("auth POST request");
});

//route   GET   /auth
//desc    gets logged in user
//access  private
router.get("/", (req, res) => {
  res.send("auth GET request");
});

module.exports = router;
