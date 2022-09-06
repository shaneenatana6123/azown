const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userType: String,
    userName: String,
    email: String,
    pass: String,
    mobile: String,
    img: String,
    price: String,
    transactionId: String,
    date: String,
    block: String,
    about: String,
    UserDOB: String,
    UserCountry: String,
    UserState: String,
    UserCity: String,
    UserStreet: String,
    UserLandmark: String,
    UserPancardNo: String,
    UserAadhaarNo: String,
    UserTotalDashboard: String,
    UserTotalProperty: String,

});

module.exports = mongoose.model("User",userSchema)

