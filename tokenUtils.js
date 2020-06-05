const jwt = require("jsonwebtoken");

const generateToken = (id) =>
  new Promise((resolve, reject) => {
    const payload = {
      user: {
        id,
      },
    };

    jwt.sign(
      payload,
      process.env.scubaDiverJwtSecret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      },
    );
  });

const verify = async (token) =>
  jwt.decode(token, process.env.scubaDiverJwtSecret);

module.exports = {
  generateToken,
  verify,
};
