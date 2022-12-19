const User = require("../models/user");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "shaneisgoodboy";
const { uploadFile, getObjectSignedUrl, deleteFile } = require("../Storage/s3");
const crypto = require("crypto");
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

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


const login = async (req, res) => {
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
const kycupdate = async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.file);
    const file = req.file
    const fileBuffer = file.buffer;
    const imageName = generateFileName();

    const fileType = file.mimetype;
    uploadFile(fileBuffer, imageName, fileType);

    req.body = { ...req.body, ...{ imgname: imageName } }
    const { name, email, phone, description, dob, imgname, usertype, adharno, pancardno, landmark, street, city, state, country } = req.body

    // console.log(name);
    // console.log(imgname);
    const updatedata = await User.updateOne({ _id: req.user.id }, {
      $set: {
        name, email, phone, description, dob, usertype, adharno, pancardno, landmark, street, city, state, country, imgname
      }
    })
    res.json({ "success": "true" })
  } catch {
    res.json({ "error": "not found" })
  }
}


const getuserdetail = async(req,res)=>{
  try{
    const userdata = await User.findOne({_id:req.user.id})
     const imgurl   =await getObjectSignedUrl(userdata.imgname)
     userdata.imgname= imgurl
    
    res.json(userdata)
  }catch{
    res.json({"error":"not found"})
  }
}
module.exports = { createuser, login, kycupdate ,getuserdetail}
