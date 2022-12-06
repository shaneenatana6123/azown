const mongoose = require('mongoose');
const { Schema } = mongoose;

const service_leadSchema = new Schema({
    service_lead_client_id:{
        type:String
    },
    service_lead_vendor_id:{
        type:String
    },
    service_lead_request:{
        type: Boolean,
        default: false
    },
    service_lead_is_completed:{
        type:Boolean
    },
    service_lead_review:{
        type:[]
    },
    service_lead_pay_amount:{
        type:String
    },
    service_lead_pay_type:{
        type:String
    },
    service_lead_request_date:{
        type: Date,
        default: Date.now
    },
  });
  const service_lead = mongoose.model('service_lead', service_leadSchema);
  module.exports = service_lead;