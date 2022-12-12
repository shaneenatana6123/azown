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
    
    stage:{
        type:Number,
        default:0
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const handler = mongoose.model('handler', HandlerSchema);
  module.exports = handler;