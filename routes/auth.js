const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const jwtSecret = config.get("jwtSecret");
const auth = require("../middleware/auth");

const User = require("../model/User");

//route   POST  /auth
//desc    Auth user and get token
//access  public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Password must be at least 6 characters in length"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "invalid credentials" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.send("Server error");
    }
  }
);

//route   GET   /auth
//desc    gets logged in user
//access  private
router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

module.exports = router;
