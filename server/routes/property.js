const fetchuser = require("../middleware/fetchuser");
const rr_props = require("../models/rr_propery");
const rr_master = require("../models/property_master");
const lead = require("../models/lead");
const User = require('../models/user')
const handler = require("../models/handler");
const { body, validationResult } = require("express-validator");
const express = require("express");
const { route } = require("./auth");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const rrpropconroller = require("../controller/rr_propcontroller");

router.post("/handlerreq", fetchuser, async (req, res) => {
  try {
    const {property_id ,property_owner_id} = req.body
    const broker_id = req.user.id
    const newdata = new handler({
      property_id,
      property_owner_id,
      broker_id
    });
    await newdata.save();
    await rr_props.updateOne({ _id:req.body.property_id }, { $push: { handlerIds: req.user.id } });


    res.json({ success: "send handler requested"});
  } catch {
    res.json({ error: "Not found" });
  }
});


router.get("/gethandler", fetchuser, async (req, res) => {
  try {
    const data = await handler.find({ broker_id: req.user.id });
    res.json(data);
  } catch {
    res.json({ error: "Not found" });
  }
});
router.get("/getuserrrprop", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    let data = await rr_props.find({ userid: userId });
    res.send(data);
  } catch {
    res.json({ error: "Not found" });
  }
});
router.get("/rrproplead/:id", fetchuser, async (req, res) => {
  try {
    // let data = await lead.find({$and :[{property_id:req.body.id},{property_client_id:req.user.id}]})
    let data = await lead.find({ property_id: req.params.id });
    res.json(data);
  } catch {
    res.json({ error: "Not found" });
  }
});

router.put("/paymentreq/:id", fetchuser, async (req, res) => {
  try {
    console.log(req.params.id);
    let data = await lead.updateOne(
      { _id: req.params.id },
      {
        $set: {
          property_closure_requested: false,
          property_closure_accepted: true,
        },
      }
    );
    res.json({ success: "true" });
  } catch {
    res.json({ error: "Not found" });
  }
});
router.post(
  "/addprop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_rr_prop
);
router.post(
  "/add-rrs-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_rrs_prop
);
router.post(
  "/add-rpg-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_rpg_prop
);
router.post(
  "/add-rfm-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_rfm_prop
);
router.post(
  "/add-cmr-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_cmr_prop
);
router.post(
  "/add-cms-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_cms_prop
);
router.post(
  "/add-plot-prop",
  upload.array("image"),
  fetchuser,
  rrpropconroller.add_plot_prop
);
router.get("/rr-detail/:id", rrpropconroller.single_rr_prop);
router.get("/rrs-detail/:id", rrpropconroller.single_rrs_prop);
router.get("/rfm-detail/:id", rrpropconroller.single_rfm_prop);
router.get("/rpg-detail/:id", rrpropconroller.single_rpg_prop);
router.get("/cmr-detail/:id", rrpropconroller.single_cmr_prop);
router.get("/cms-detail/:id", rrpropconroller.single_cms_prop);
router.get("/plot-detail/:id", rrpropconroller.single_plot_prop);

router.get("/getrrprop", fetchuser, rrpropconroller.get_rr_prop);
 
router.get("/getrrs",fetchuser,rrpropconroller.get_rrs)
router.get("/getrpg",fetchuser,rrpropconroller.get_rpg)
router.get("/getrfm",fetchuser,rrpropconroller.get_rfm)
router.get("/getcmr",fetchuser,rrpropconroller.get_cmr)
router.get("/getcms",fetchuser,rrpropconroller.get_cms)
router.get("/getplot",fetchuser,rrpropconroller.get_plot)



router.get("/userdash", fetchuser, async (req, res) => {
  try {
    leaddash = await lead.find({ property_client_id: req.user.id });
    res.send(leaddash);
  } catch {}
});
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
