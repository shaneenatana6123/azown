const mongoose = require('mongoose');
const { Schema } = mongoose;

const LeadSchema = new Schema({
    property_id:{
        type:String
    },
    property_user_id:{
        type:String
    },
    property_client_id :{
        type:String,
    },
    property_handler_id:{
        type:String
    },
    property_is_open:{
        type:Boolean,
        default:true
    },
    property_closure_requested:{
        type:Boolean,     
    },  
    property_closure_accepted:{
        type:Boolean,
    },
    property_payment_req:{
        type:Boolean
    },
    property_is_transaction_complete  :{
        type:String
    }    ,
    property_transaction_id :{
        type:String
    },
    // property_open_date
    // property_closure_date
    date:{
        type: Date,
        default: Date.now
    },
  });
  const Lead = mongoose.model('lead', LeadSchema);
  module.exports = Lead;