const rr_props = require("../models/rr_propery");
const rr_master = require("../models/property_master");
const lead = require("../models/lead");
const User = require('../models/user')
const {  getObjectSignedUrl} = require('../Storage/s3')


const leadcreate =  async (req, res) => {
    try {
      console.log(req.user.id);
      console.log(req.body.property_id);
      const _id = req.body.property_id;
      const property = await rr_props.findOne({ _id });
      console.log(property);
      const leadpp = new lead({
        property_id: _id,
        property_lead_client_id: req.user.id,
        property_lead_owner_id: property.userid,
        property_lead_handler_id: property.handlerid,
        property_lead_stage:0
      });
      await leadpp.save();
      await rr_props.updateOne({ _id }, { $push: { lead: req.user.id } });
      res.json({ success: "Lead is created" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
 const userleaddata = async (req, res) => {
  // console.log(req.user.id)
 
  try {
    let result=[]
    let prop =[]
    let user =[]
    let data = await lead.find({ property_lead_client_id: req.user.id });
    data.forEach((element) => {
      prop.push(element.property_id)
      user.push(element.property_lead_handler_id)   
    });
    // console.log(prop);
    // console.log(user);
    console.log(data);
     const propdata= await rr_props.find({_id:{$in:prop}})
     const userdata = await User.find({_id:{$in:user}})
     
     for (let index = 0; index < data.length; index++) {
      let element = data[index];
      let propval
      let userval
      for (let i = 0; i < propdata.length; i++) {
        if (element.property_id ==propdata[i]._id){
           propval = propdata[i]
        }       
      }
      for (let i = 0; i < userdata.length; i++) {
        if (element.property_lead_handler_id == userdata[i]._id){
           userval = userdata[i]
        }
      }
      
      let {name , email } = userval
      let {images} = propval
      let imgurl =[]
      for (let post of images){
        let posturl = await getObjectSignedUrl(post)
         imgurl.push(posturl)
       }
      element =  {...element._doc,...{imgurl},...{email},...{name}}
       console.log(element);
       result.push(element)
      
     }
   
    console.log(result);
  
    res.json(result);
  } catch {
    res.json({ error: "Not found" });
  }
}
const updateleadstage = async (req,res)=>{
  try{
    const {_id,property_lead_stage } = req.body
// console.log(req.body);
await lead.updateOne({_id}, {$set:{property_lead_stage}})
res.json({result:"updated lead"})
  }catch{
    res.json({ error: "Not found" });
  }

}


const ownerlead = async (req,res)=>{
  try{

    const {property_id} = req.body
    const property_lead_owner_id = req.user.id

 const data = await lead.find({$and:[{property_id},{property_lead_owner_id}]})
 const users =[]
 let result = []
 for (let i = 0; i < data.length; i++) {
     users.push(data[i].property_lead_client_id) 
 }
 const userdata = await User.find({_id:{$in:users}})
 for (let i = 0; i < data.length; i++) {
  let element = data[i];
  let userval;
  for (let j = 0; j < userdata.length; j++) {
    if (userdata[j]._id== element.property_lead_client_id){
      userval = userdata[j]
    }}
    const {name, email} = userval
    element = {...element._doc,...{name},...{email}}
    // console.log(element)
    // console.log(userval);
    result.push(element)
  
 }
 console.log(result);
 res.json(result)
  }catch{
    res.json({ error: "Not found" });
  }
}
  module.exports = { leadcreate,userleaddata,updateleadstage,ownerlead };