const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type:String
    },
    dob:{
        type:String
    },
    password:{
        type: String,
        required: true
    },
    usertype:{
        type:String,
        default:"Visiter"
    },
    imgname:{
        type:String
    },
    description:{
        type:String
    },
    country:String,
    state:String,
    city:String,
    street:String,
    landmark:String,
    adharno:{
        type:String
    },
    pancardno:{
        type:String
    },
    transactionid:{
        type:String
    },
    totalproperty:{
        type:String
    },
    totaldashboard:{
        type:String
    },
    block:{
        type:Boolean,
        default:false
    },
    date:{
        type: Date,
        default: Date.now
    }
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;