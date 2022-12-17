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


const accepthandler =  async (req, res) => {
    try {
      const {property_id,broker_id,stage} = req.body
   const property_owner_id = req.user.id
      // console.log(property_owner_id,property_id,broker_id);
     await handler.updateOne(
        { property_id, broker_id,property_owner_id},
        { $set: { stage } }
      );
      if (stage===10) {
        await rr_props.updateOne({property_id}, {$set:{handlerid:broker_id}})
        
      }
      res.json({res:"updated successfully"});
    } catch {
      res.json({ error: "Not found" });
    }
  }

 const  handlerwithid =async (req, res) => {
    try {
      const data = await handler.find({
        $and: [
          { property_owner_id: req.user.id },
          { property_id: req.params.id },{stage:0}
        ],
      });
      console.log(data);
     const arr =[]
     data.forEach((element)=>{
  arr.push(element.broker_id)
  console.log(element.broker_id);
     })
     userdata =await   User.find({_id:{$in:arr}})
    //  console.log(userdata);
      res.json(userdata);
    } catch {
      res.json({ error: "Not found" });
    }
  }
  module.exports = { handledproperties, handlerleads, handcontact,accepthandler,handlerwithid };