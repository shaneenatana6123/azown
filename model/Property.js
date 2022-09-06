const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Country: String,
    State: String,
    City: String,
    Street: String,
    Landmark: String,
    Address: String,
    BildingName: String,
    flatNo: String,
    ownerName: String,
    OwnerId: String,
    PropertyImage: Array,
    PropertySize: String,
    About: String,
    PropertyType: String,
    PropertyBuyType: String,
    BHKType: String,
    FloorNo: String,
    TotalFloor: String,
    PropertyAge: String,
    Facing: String,
    Zipcode: String,
    lat: String,
    long: String,
    rent: String,
    MonthyMaintenance: String,
    Deposit: String,
    LeaseDuration: String,
    HanderID: String,
    Date: String,


});

module.exports = mongoose.model("Property",userSchema)

