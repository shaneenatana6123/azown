const express = require("express");
const router = express.Router();
const LeadController = require('../controller/LeadPropertyController')
const fetchuser = require('../middleware/fetchuser')

router.post("/leadcreate", fetchuser,LeadController.leadcreate);
router.get("/userleaddata", fetchuser, LeadController.userleaddata);
router.put("/updateleadstage", fetchuser, LeadController.updateleadstage)
router.post("/ownerlead", fetchuser,LeadController.ownerlead)

module.exports = router;
