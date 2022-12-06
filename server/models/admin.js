const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
    email:{
        type: String,
        
    },
    password:{
        type: String,
    } 
  });
  const Admin = mongoose.model('admin', AdminSchema);
  module.exports = Admin;