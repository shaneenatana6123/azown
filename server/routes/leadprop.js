const express = require("express");
const router = express.Router();
const LeadController = require('../controller/LeadPropertyController')
const fetchuser = require('../middleware/fetchuser')

router.post("/leadcreate", fetchuser,LeadController.leadcreate);

module.exports = router;
