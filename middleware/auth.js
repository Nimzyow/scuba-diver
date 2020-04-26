const jwt = require("jsonwebtoken");
const config = require("config");
const jwtSecret = config.get("jwtSecret");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ msg: "token is not valid" });
  }
};
