const fetchuser = require("../middleware/fetchuser");
const rr_props = require("../models/rr_propery")
const rr_master = require("../models/property_master")
const lead = require("../models/lead")
const handler = require("../models/handler")
const { body, validationResult } = require("express-validator");
const express = require("express");
const { route } = require("./auth");
const router = express.Router();


router.post("/handlerbreq/:id",fetchuser,async (req,res)=>{
  try{
    const broker_id = req.user.id
    const property_id=req.params.id
    const master =await rr_master.find({property_id})
    const property_owner_id = master[0].property_user_id
    const newdata = new handler({
      property_id,broker_id,property_owner_id
    })
    await newdata.save()

res.json({"success":true})
  }catch{
    res.json({"error":"Not found"})
  }
  
})
router.put("/accepthandler/:id",fetchuser,async (req,res)=>{
  try{
    const update = await handler.updateOne({_id:req.params.id},{$set :{property_broker_requested:true}})
res.json(update)
  }catch{
    res.json({"error":"Not found"})
  }
})
router.get("/handreqwithid/:id",fetchuser,async (req,res)=>{
  try{
    // console.log(req.params.id);
     const data =await  handler.find({$and:[{property_owner_id:req.user.id},{property_id:req.params.id}]})
    //  console.log(data);
     res.json(data)
  }catch{
    res.json({"error":"Not found"})
  }
})
router.get("/gethandler",fetchuser,async (req,res)=>{
  try{
     const data =await  handler.find({broker_id:req.user.id})
     res.json(data)
  }catch{
    res.json({"error":"Not found"})
  }
})
router.get("/getuserrrprop", fetchuser,async (req,res)=>{
  try{
    const userId = req.user.id
    let data =await rr_props.find({userid:userId})
    res.send(data)
  }catch{
    res.json({"error":"Not found"})

  }
})
router.get("/rrproplead/:id", fetchuser,async(req,res)=>{
  try{
    // let data = await lead.find({$and :[{property_id:req.body.id},{property_client_id:req.user.id}]})
    let data =await lead.find({property_id:req.params.id})
    res.json(data)
    
  }catch{
    res.json({"error":"Not found"})
  }
})
router.get("/userleaddata",fetchuser,async (req,res)=>{
  try{
      let data = await lead.find({property_user_id:req.user.id})
      res.json(data)
  }catch{
    res.json({"error":"Not found"})
  }
})
router.put("/paymentreq/:id",fetchuser,async(req,res)=>{
  try{
console.log(req.params.id);
let data = await lead.updateOne({_id:req.params.id},{$set :{property_closure_requested:false,property_closure_accepted:true}})
res.json({"success":"true"})
  }catch{
    res.json({"error":"Not found"})
  }
})
router.post(
  "/addprop",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    
    try {
      const { title, description,proptype  } = req.body;
            
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const rr_pro = new rr_props({
        userid:req.user.id,
        title,
        description,
        proptype,
        
      });
      // console.log(title);
      const savedNote = await rr_pro.save();
      const nmaster = new rr_master({
        property_id:savedNote._id ,
        property_user_id: req.user.id,  
        property_handler_id:req.user.id,

      })
      await nmaster.save()
      // console.log(req.user.id);
      
      res.json(savedNote._id);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


router.get("/fetchallprops", fetchuser, async (req, res) => {
  try {
    const rr_properties = await rr_props.find({ userid:{$not :{$eq:req.user.id}}  });
    console.log(rr_properties);
    res.json(rr_properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/leadreq",fetchuser,async (req,res)=>{
  try{
console.log(req.user.id);
console.log(req.body.property_id);
const property_id = req.body.property_id
const master =await rr_master.find({property_id})
const leadpp =  new lead({
  property_id:property_id,
  property_user_id:req.user.id,
  property_client_id:master[0].property_user_id,
  property_handler_id:master[0].property_handler_id,
  property_closure_requested:true

})
await leadpp.save()
console.log(master);
res.json({ success:"every thing ok"})
  }catch{

  }
})
router.get("/userdash",fetchuser,async(req,res)=>{
  try{
leaddash =await  lead.find({property_client_id:req.user.id})
res.send(leaddash)
  }catch{

  }

})
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // Find the note to be delete and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this Note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // Create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
