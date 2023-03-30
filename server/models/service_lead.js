const mongoose = require('mongoose');
const { Schema } = mongoose;

const service_leadSchema = new Schema({
    service_lead_client_id:{
        type:String
    },
    service_lead_vender_id:{
        type:String
    },
    service_lead_stage:{
        type:Number,
        default: 0
    },
    service_lead_review:{
        type:[{
            review:{
                type:String

            },
            rating:{
                type:Number
            },
            client_id:{
                type:String
            }
        }]
    },
   
    
  }, { timestamps: true});
  const service_lead = mongoose.model('service_lead', service_leadSchema);
  module.exports = service_lead;