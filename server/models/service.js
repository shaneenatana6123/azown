const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceSchema = new Schema({
  service_name: {
    type: String,
  },
  service_desc: {
    type: String,
  },
  service_charge: {
    type: Number,
  },
  service_is_active: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Service = mongoose.model("Service", ServiceSchema);
module.exports = Service;
