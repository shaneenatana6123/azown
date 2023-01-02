const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://azown:azownali123@cluster0.fkcjj3d.mongodb.net/Azown"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;

