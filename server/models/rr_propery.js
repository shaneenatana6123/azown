const mongoose = require('mongoose');
const { Schema } = mongoose;

const rr_PropSchema = new Schema({
    userid:{
        type:String
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    proptype:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('rr_prop', rr_PropSchema);