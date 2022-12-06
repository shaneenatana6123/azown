const mongoose = require('mongoose');
const { Schema } = mongoose;

const HandlerSchema = new Schema({
    property_id:{
        type:String
    },
    property_owner_id:{
        type:String
    },
    broker_id :{
        type:String,
    },
    
    property_broker_requested:{
        type:Boolean, 
        default:false    
    },  
    date:{
        type: Date,
        default: Date.now
    },
  });
  const handler = mongoose.model('handler', HandlerSchema);
  module.exports = handler;