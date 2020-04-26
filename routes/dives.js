const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../model/User");
const Dive = require("../model/Dive");
const { check, validationResult } = require("express-validator");

//route   GET  /dives
//desc    fetches all user dives
//access  private
router.get("/", auth, async (req, res) => {
  try {
    const dives = await Dive.find({ user: req.user.id }).sort({ date: -1 });
    res.json(dives);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Sever error");
  }
});

//route   POST  /dives
//desc    adds new dive
//access  private
router.post(
  "/",
  [
    auth,
    [
      check("location", "please enter a dive location").not().isEmpty(),
      check("numberOfDives", "please enter the number of dives").isNumeric(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { title, location, diveDetails, numberOfDives } = req.body;

    try {
      const newDive = new Dive({
        user: req.user.id,
        title: title,
        location: location,
        diveDetails: diveDetails,
        numberOfDives: numberOfDives,
      });

      const dive = await newDive.save();

      res.json(dive);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//route   PUT   /dives/:id
//desc    updates a dive
//access  private
router.put("/:id", auth, async (req, res) => {
  const { location, title, diveDetails, numberOfDives } = req.body;

  const diveFields = {};

  if (location) diveFields.location = location;
  if (title) diveFields.title = title;
  if (diveDetails) diveFields.diveDetails = diveDetails;
  if (numberOfDives) diveFields.numberOfDives = numberOfDives;

  try {
    let dive = await Dive.findById(req.params.id);
    if (!dive) return res.status(404).json({ msg: "Dive not found" });
    if (dive.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    dive = await Dive.findByIdAndUpdate(
      req.params.id,
      { $set: diveFields },
      { new: true }
    );
    res.json(dive);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//route   DELETE  /dives/:id
//desc    delete a dive
//access  private
router.delete("/:id", auth, async (req, res) => {
  try {
    let dive = await Dive.findById(req.params.id);
    if (!dive) return res.status(404).json({ msg: "Dive not found" });
    if (dive.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    if (dive.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Dive.findByIdAndRemove(req.params.id);
    res.json({ msg: "removed dive" });
  } catch (err) {
    console.error(err.message);
    res.send("Server error");
  }
});

module.exports = router;
