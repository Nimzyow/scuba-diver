const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtSecret = config.get("jwtSecret");

const User = require("../model/User");

//route   POST    /users
//desc    registers a new user
//access  public
router.post(
  "/",
  [
    check("username", "Please enter a username").not().isEmpty(),
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

    //extract contents from body
    const { username, email, password } = req.body;

    //handle database here with bcrypt
    try {
      //does the email exist in our database for User?
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ msg: "User with that email already exists" });
      }
      //create new instance of User model.
      let createUser = new User({
        username: username,
        email: email,
        password: password,
      });

      //encrypt password
      const salt = await bcrypt.genSalt(10);
      createUser.password = await bcrypt.hash(password, salt);

      //save to database
      await createUser.save();

      //now we need to generate a jwt token
      const payload = {
        user: {
          id: createUser.id,
        },
      };

      jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token: token });
      });
    } catch (error) {
      console.error(error.message);
      res.sendStatus(500).send("Server error");
    }
  }
);

module.exports = router;
