const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");

router.post("/adminlogin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admindata = await Admin.findOne({email});
    if (admindata.password === password){
        res.json({ success: "true" });
    }else{
        res.json({ success: "unauthorize" });
    }    
  } catch {
    res.json({ success: "Not found" });
  }
});

module.exports = router;
