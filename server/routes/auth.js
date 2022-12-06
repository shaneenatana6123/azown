const express = require("express");
const router = express.Router();
const User = require("../models/user");
const userController = require("../controller/usercontroller");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "shaneisgoodboy";
const fetchuser = require("../middleware/fetchuser");


router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 3 characters").isLength({
      min: 3,
    }),
  ],
  userController.createuser
);
router.put("/kycupdate",fetchuser , async (req,res)=>{
  try{
    const {name,email,usertype , phone , adharno}  = req.body
    // console.log(name);
    const updatedata = await User.updateOne({_id:req.user.id},{$set:{
name,email,usertype,phone,adharno
    }})
    res.json({"success":"true"})
  }catch{
    res.json({"error":"not found"})
  }
})
router.get("/getuserdetail",fetchuser ,async(req,res)=>{
  try{
    const userdata = await User.find({_id:req.user.id})
    res.json(userdata)
  }catch{
    res.json({"error":"not found"})
  }
})
router.post(
  "/login",
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password cannot be blank").exists(),
  userController.login
);

// router.post("/getuser", fetchuser,async function (req, res)  {
//   try {
//      userId = req.user.id;
//     const user = await User.findById(userId).select("-password")
//     res.send(user);
//   } catch  {
//     // console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });
module.exports = router;
