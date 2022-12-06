const mongoose = require("mongoose");
const { Schema } = mongoose;

const vender_serviceSchema = new Schema({
  service_name: {
    type: String,
  },
  vender_id:{
    type:String
  },
  vender_name:{
    type:String
  },
  vendor_description:{
    type:String
  },
  vendor_location:{
    type:String
  },
  lead_req:{
    type:[]
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const vender_service = mongoose.model("vender_service", vender_serviceSchema);
module.exports = vender_service;
