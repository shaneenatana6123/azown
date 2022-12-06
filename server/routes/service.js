const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Service = require("../models/service");
const vender_service = require("../models/vender_service");
const Vender = require("../models/vender_service");
const service_lead = require("../models/service_laed");
router.post("/createservice", async (req, res) => {
  const { service_name, service_desc, service_charge } = req.body;
  try {
    const servicedata = await new Service({
      service_name,
      service_desc,
      service_charge,
    });
    const data = await servicedata.save();
    res.json({ data });
  } catch {
    res.json({ success: "Not found" });
  }
});

router.get("/fetchservice", async (req, res) => {
  try {
    const data = await Service.find({});
    res.json(data);
  } catch {
    res.json({ success: "Not found" });
  }
});
router.get("/allvenderservice", fetchuser, async (req, res) => {
  try {
    const data = await Vender.find({ vender_id: req.user.id });
    res.json(data);
  } catch (error) {
    res.json({ success: "Not found" });
  }
});
router.get("/clientservicelead", fetchuser, async (req, res) => {
  try {
    const datalead = await service_lead.find({
      service_lead_client_id: req.user.id,
    });
    res.json(datalead);
  } catch (error) {
    res.json({ success: "Not found" });
  }
});
router.post("/createservicelead", fetchuser, async (req, res) => {
  try {
    console.log(req.body.id);
    const venderdata = await Vender.find({_id:req.body.id})
    const newlead = new service_lead({
      service_lead_client_id: req.user.id,
      service_lead_vendor_id: venderdata[0].vender_id,
    });
    const data = await newlead.save();
    const upadate = await Vender.updateOne({_id:req.body.id},{$push:{lead_req:req.user.id}})
    
    res.json(data);
  } catch (error) {
    res.json({ success: "Not found" });
  }
});
router.get("/:name", async (req, res) => {
  try {
    const data = await Vender.find({ service_name: req.params.name });
    res.json(data);
  } catch (error) {
    res.json({ success: "Not found" });
  }
});
router.post("/addvenderservice", fetchuser, async (req, res) => {
  try {
    req.body = { ...req.body, vender_id: req.user.id };
    const newvender = new Vender(req.body);
    await newvender.save();
    console.log(req.body);
    res.json(req.body);
  } catch (error) {
    res.json({ success: "true" });
  }
});

module.exports = router;
