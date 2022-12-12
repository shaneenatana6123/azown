
const rr_props = require("../models/rr_propery");
const rr_master = require("../models/property_master");
const lead = require("../models/lead");


const leadcreate =  async (req, res) => {
    try {
      console.log(req.user.id);
      console.log(req.body.property_id);
      const _id = req.body.property_id;
      const property = await rr_props.findOne({ _id });
      console.log(property);
      const leadpp = new lead({
        property_id: _id,
        property_client_id: req.user.id,
        property_owner_id: property.userid,
        property_handler_id: property.handlerid,
      });
      await leadpp.save();
      await rr_props.updateOne({ _id }, { $push: { lead: req.user.id } });
      res.json({ success: "Lead is created" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
  module.exports = { leadcreate };