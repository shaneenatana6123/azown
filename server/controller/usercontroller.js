const User = require("../models/user");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "shaneisgoodboy";

const createuser = async (req, res) => {
  const errors = validationResult(req);
  let success = false;
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({
          success,
          error: "Sorry a user with this email already exists",
        });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });
    const data = {
      user: {
        id: user.id,
      },
    };
    success = true;
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ success, authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(success, "Internal Server Error");
  }
};


const login =  async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(404).json({ err: err.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false;
      return res.status(400).json({ error: "User not exist" });
    }
    const passComapre = await bcrypt.compare(password, user.password);
    if (!passComapre) {
      return res.status(400).json({ error: "Invalid pass" });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    return res.json({ success, authtoken });
  } catch {
    // console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

module.exports ={ createuser, login}
