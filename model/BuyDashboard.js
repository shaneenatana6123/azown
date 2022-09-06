const mongoose = require("mongoose");

const buyDashboardSchema = new mongoose.Schema({
    userName: String,
    userId: String,
    mobile: String,
    Price: String,
    transactionId: String,
    status: String,
    block: String,
    dateAndTime: String,
});

module.exports = mongoose.model("BuyDashboard",buyDashboardSchema)

