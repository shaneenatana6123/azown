const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shane6123:shane6123@cluster0.jx2dhyr.mongodb.net/TestAzown"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;