const express = require("express");
const router = express.Router();

//route   GET  /dives
//desc    fetches all user dives
//access  private
router.get("/", (req, res) => {
  res.send("dives GET request");
});

//route   POST  /dives
//desc    adds new dive
//access  private
router.post("/", (req, res) => {
  res.send("dives POST request");
});

//route   PUT   /dives/:id
//desc    updates a dive
//access  private
router.put("/:id", (req, res) => {
  res.send("dives PUT request");
});

//route   DELETE  /dives/:id
//desc    delete a dive
//access  private
router.delete("/:id", (req, res) => {
  res.send("dives DELETE request");
});

module.exports = router;
