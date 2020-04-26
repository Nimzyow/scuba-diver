const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const User = require("../model/User");

//route   POST    /users
//desc    registers a new user
//access  public
router.post(
  "/",
  [
    check("username").not().isEmpty(),
    check("email").isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    //extract contents from body
    const { username, email, password } = req.body;

    //handle database here with bcrypt
    try {
    } catch (error) {}

    res.send("users POST request");
  }
);

module.exports = router;
