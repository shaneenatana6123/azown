const mongoose = require('mongoose');
const { Schema } = mongoose;

const vender_kycSchema = new Schema({
    vender_id:{
        type:String
    },
    vender_aadhar:{
        type:String
    },
    vender_pan:{
        type:String
    },
    vender_gst:{
        type:String
    },
  
}, { timestamps: true });
const vender_kyc = mongoose.model('vender_kyc', vender_kycSchema);

const broker_kycSchema = new Schema({
    broker_id:{
        type:String
    },
    broker_aadhar:{
        type:String
    },
    broker_pan:{
        type:String
    },
    broker_gst:{
        type:String
    },

}, { timestamps: true });
const broker_kyc = mongoose.model('broker_kyc', broker_kycSchema);

const user_kycSchema = new Schema({
    user_id:{
        type:String
    },
    user_aadhar:{
        type:String
    },
    user_pan:{
        type:String
    },
    user_gst:{
        type:String
    },
}, { timestamps: true });
const user_kyc = mongoose.model('user_kyc', user_kycSchema);

module.exports =  {  vender_kyc  ,   broker_kyc  , user_kyc};
    
