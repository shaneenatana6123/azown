const rr_props = require("../models/rr_propery");
const User = require('../models/user')
const lead = require('../models/lead')
const handler = require('../models/handler')
const {  getObjectSignedUrl} = require('../Storage/s3')


const handledproperties= async (req,res) =>{
    try{
        const handlerprops =  await rr_props.find({handlerid:req.user.id})
        // console.log(req.user.id);
        res.json(handlerprops)
    }catch{
        res.json({ error: "Not found" });
    }

}



const handlerleads = async (req,res)=>{
    try{

        const {property_id} = req.body
        const property_lead_handler_id = req.user.id
    
     const data = await lead.find({$and:[{property_id},{property_lead_handler_id}]})
     const users =[]
     let result = []
     for (let i = 0; i < data.length; i++) {
         users.push(data[i].property_lead_handler_id) 
     }
     const userdata = await User.find({_id:{$in:users}})
     for (let i = 0; i < data.length; i++) {
      let element = data[i];
      let userval;
      for (let j = 0; j < userdata.length; j++) {
        if (userdata[j]._id== element.property_lead_handler_id){
          userval = userdata[j]
        }}
        const {name, email} = userval
        element = {...element._doc,...{name},...{email}}
        // console.log(element)
        // console.log(userval);
        result.push(element)
      
     }
    //  console.log(userdata);
     res.json(result)
      }catch{
        res.json({ error: "Not found" });
      }
    }
const handcontact =async (req,res)=>{
    try {
        let result=[]
        let prop =[]
        let user =[]
        let data = await handler.find({ broker_id: req.user.id });
        data.forEach((element) => {
          prop.push(element.property_id)
          user.push(element.property_owner_id)   
        });
        // console.log(data);
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
            if (element.property_owner_id == userdata[i]._id){
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
        //    console.log(element);
           result.push(element)
          
         }
       
        console.log(result);
      
        res.json(result);
      } catch {
        res.json({ error: "Not found" });
      }
}

  module.exports = { handledproperties, handlerleads, handcontact };