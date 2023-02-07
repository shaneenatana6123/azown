const rr_props = require("../models/rr_propery");
const rr_master = require("../models/property_master");
const { uploadFile, getObjectSignedUrl, deleteFile } = require("../Storage/s3");
const rrs_props = require('../models/rrs_props')
const rpg_prop = require('../models/rr-pg')
const rfm_prop = require('../models/rr-flat')
const cmr_prop = require('../models/cm-rent')
const cms_prop = require('../models/cm-sale')
const plot_prop = require('../models/land-plot')
const user = require('../models/user')
const crypto = require("crypto");
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");


const single_rr_prop = async (req, res) => {

  try {
    const _id = req.params.id
    const imageurls = []
    let data = await rr_props.findOne({ _id })

    // console.log(data);
    
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    data.images = imageurls
    let userData = await user.findOne({ _id: data.handlerid })
    const { email, name } = userData
    // console.log(email);
    data = {...data._doc,...{email},...{name}}
    console.log(data);
    res.status(200).json(data)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

const single_rrs_prop = async (req, res) => {

  try {
    const _id = req.params.id
    const imageurls = []
    let data = await rrs_props.findOne({ _id })

    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
    let userData = await user.findOne({ _id: data.handlerid })
    let { email, name } = userData
    // console.log(email);
    data = {...data._doc,...{email},...{name}}
    res.status(200).json(data)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const single_rpg_prop = async (req, res) => {

  try {
    const _id = req.params.id
    const imageurls = []
    let data = await rpg_prop.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
    let userData = await user.findOne({ _id: data.handlerid })
    const { email, name } = userData
    // console.log(email);
    data = {...data._doc,...{email},...{name}}
    res.status(200).json(data)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

const single_rfm_prop = async (req, res) => {

  try {
    const _id = req.params.id
    const imageurls = []
    let data = await rfm_prop.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
    let userData = await user.findOne({ _id: data.handlerid })
    const { email, name } = userData
    // console.log(email);
    data = {...data._doc,...{email},...{name}}
    res.status(200).json(data)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const single_cmr_prop = async (req, res) => {

  try {
    const _id = req.params.id
    const imageurls = []
    let data = await cmr_prop.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
    let userData = await user.findOne({ _id: data.handlerid })
    const { email, name } = userData
    // console.log(email);
    data = {...data._doc,...{email},...{name}}
    res.status(200).json(data)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const single_cms_prop = async (req, res) => {

  try {
    const _id = req.params.id
    const imageurls = []
    let data = await cms_prop.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
    let userData = await user.findOne({ _id: data.handlerid })
    const { email, name } = userData
    // console.log(email);
    data = {...data._doc,...{email},...{name}}
    res.status(200).json(data)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

const single_plot_prop = async (req, res) => {

  try {
    const _id = req.params.id
    const imageurls = []
    let data = await plot_prop.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
    let userData = await user.findOne({ _id: data.handlerid })
    const { email, name } = userData
    // console.log(email);
    data = {...data._doc,...{email},...{name}}
    res.status(200).json(data)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}


const add_rr_prop = async (req, res) => {
  try {
    const user = { userid: req.user.id };
    const handle = { handlerid: req.user.id };
    const bhk = req.body.rr_detail_bhk_type
    const app = req.body.rr_detail_app_type
    const state = req.body.rr_location_state
    const create = `${bhk} ${app} Available for rent in ${state}`

    const file = req.files;
    const arr = [];
    for (let i = 0; i < file.length; i++) {
      const fileBuffer = file[i].buffer;
      const imageName = generateFileName();
      arr.push(imageName);
      const fileType = file[i].mimetype;
      uploadFile(fileBuffer, imageName, fileType);
    }
    const img = { images: arr };
    const title = { rr_detail_title: create }

    const newdata = { ...req.body, ...user, ...handle, ...img, ...title };
    // console.log(newdata);
    const data = new rr_props(newdata);
    await data.save();
    res.status(200).json({ message: "upload successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
const add_rrs_prop = async (req, res) => {
  try {
    // console.log(req.body);
    const user = { userid: req.user.id };
    const handle = { handlerid: req.user.id };
    const bhk = req.body.rrs_detail_bhk_type
    const app = req.body.rrs_detail_app_type
    const state = req.body.rrs_location_state
    const create = `${bhk} ${app} Available for Sale in ${state}`
    const file = req.files;
    const arr = [];
    for (let i = 0; i < file.length; i++) {
      const fileBuffer = file[i].buffer;
      const imageName = generateFileName();
      arr.push(imageName);
      const fileType = file[i].mimetype;
      uploadFile(fileBuffer, imageName, fileType);
    }
    const img = { images: arr };
    const title = { rrs_detail_title: create }
    const newdata = { ...req.body, ...user, ...handle, ...img, ...title };
    // console.log(newdata);
    const data = new rrs_props(newdata);
    await data.save();
    res.status(200).json({ message: "upload successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const add_rpg_prop = async (req, res) => {
  try {
    // console.log(req.body);
    const user = { userid: req.user.id };
    const handle = { handlerid: req.user.id };
    // const avail = req.body.rpg_detail_availablefor
    const guest = req.body.rpg_detail_pref_guest
    const state = req.body.rpg_location_state
    let create
    if (guest == "Both") {
      create = `PG For Working Professional And Students Available in ${state}`
    } else {
      create = `PG For ${guest} Available in ${state}`
    }

    const file = req.files;
    const arr = [];
    for (let i = 0; i < file.length; i++) {
      const fileBuffer = file[i].buffer;
      const imageName = generateFileName();
      arr.push(imageName);
      const fileType = file[i].mimetype;
      uploadFile(fileBuffer, imageName, fileType);
    }
    const img = { images: arr };
    let title = { rpg_detail_title: create }
    const newdata = { ...req.body, ...user, ...handle, ...img, ...title };
    // console.log(newdata);
    const data = new rpg_prop(newdata);
    await data.save();
    res.status(200).json({ message: "upload successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const add_rfm_prop = async (req, res) => {
  try {
    console.log(req.body);
    const user = { userid: req.user.id };
    const handle = { handlerid: req.user.id };
    const bhk = req.body.rfm_detail_bhk_type
    const app = req.body.rfm_detail_app_type
    const state = req.body.rfm_location_state
    const create = `${bhk} ${app} Available for Flatmate in ${state}`
    const file = req.files;
    const arr = [];
    for (let i = 0; i < file.length; i++) {
      const fileBuffer = file[i].buffer;
      const imageName = generateFileName();
      arr.push(imageName);
      const fileType = file[i].mimetype;
      uploadFile(fileBuffer, imageName, fileType);
    }
    const img = { images: arr };
    const title = { rfm_detail_title: create }
    const newdata = { ...req.body, ...user, ...handle, ...img, ...title };
    // console.log(newdata);
    const data = new rfm_prop(newdata);
    await data.save();
    res.status(200).json({ message: "upload successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

const add_cmr_prop = async (req, res) => {
  try {
    console.log(req.body);
    const user = { userid: req.user.id };
    const handle = { handlerid: req.user.id };
    const prop = req.body.cr_detail_property_type
    const build = req.body.cr_detail_building_type
    const floor = req.body.cr_detail_floor
    const state = req.body.cr_location_state
    const create = `${prop} Available On ${floor}rd Floor Of ${build} in ${state}`

    const file = req.files;
    const arr = [];
    for (let i = 0; i < file.length; i++) {
      const fileBuffer = file[i].buffer;
      const imageName = generateFileName();
      arr.push(imageName);
      const fileType = file[i].mimetype;
      uploadFile(fileBuffer, imageName, fileType);
    }
    const img = { images: arr };
    const title = { cr_detail_title: create }
    const newdata = { ...req.body, ...user, ...handle, ...img, ...title };
    console.log(newdata);
    const data = new cmr_prop(newdata);
    await data.save();
    res.status(200).json({ message: "upload successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const add_cms_prop = async (req, res) => {
  try {
    console.log(req.body);
    const user = { userid: req.user.id };
    const handle = { handlerid: req.user.id };
    const prop = req.body.cs_detail_property_type
    const build = req.body.cs_detail_building_type
    const floor = req.body.cs_detail_floor
    const state = req.body.cs_location_state
    const create = `${prop} Available On ${floor} Of ${build} in ${state}`
    const file = req.files;
    const arr = [];
    for (let i = 0; i < file.length; i++) {
      const fileBuffer = file[i].buffer;
      const imageName = generateFileName();
      arr.push(imageName);
      const fileType = file[i].mimetype;
      uploadFile(fileBuffer, imageName, fileType);
    }
    const img = { images: arr };
    const title = { cs_detail_title: create }
    const newdata = { ...req.body, ...user, ...handle, ...img, ...title };
    console.log(newdata);
    const data = new cms_prop(newdata);
    await data.save();
    res.status(200).json({ message: "upload successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const add_plot_prop = async (req, res) => {
  try {
    console.log(req.body);
    const user = { userid: req.user.id };
    const handle = { handlerid: req.user.id };
    const Boundary = req.body.ps_detail_has_boundary
    const l = req.body.ps_detail_plot_length
    const w = req.body.ps_detail_plot_width
    const road = req.body.ps_detail_width_of_facing_road
    const state = req.body.ps_location_state
    let create
    if (Boundary) {
      create = `${parseInt(l) * parseInt(w)} SQFT With Boundry Available In Front Of ${road}FT in ${state}`
    } else {
      create = `${parseInt(l) * parseInt(w)} SQFT Available In Front Of ${road}FT in ${state}`
    }

    const file = req.files;
    const arr = [];
    for (let i = 0; i < file.length; i++) {
      const fileBuffer = file[i].buffer;
      const imageName = generateFileName();
      arr.push(imageName);
      const fileType = file[i].mimetype;
      uploadFile(fileBuffer, imageName, fileType);
    }
    const img = { images: arr };
    const title = { ps_detail_title: create }
    const newdata = { ...req.body, ...user, ...handle, ...img, ...title };
    console.log(newdata);
    const data = new plot_prop(newdata);
    await data.save();
    res.status(200).json({ message: "upload successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_rr_prop = async (req, res) => {
  try {
    const props = await rr_props.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}



const get_rrs = async (req, res) => {
  try {
    const props = await rrs_props.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    // console.log(rr_properties);
    res.status(200).json(props);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_rpg = async (req, res) => {
  try {
    const props = await rpg_prop.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_rfm = async (req, res) => {
  try {
    const props = await rfm_prop.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_cmr = async (req, res) => {
  try {
    const props = await cmr_prop.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_cms = async (req, res) => {
  try {
    const props = await cms_prop.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_plot = async (req, res) => {
  try {
    const props = await plot_prop.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const my_rr = async (req, res) => {
  try {
    const userId = req.user.id;
    let props = await rr_props.find({ userid: userId });
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch {
    res.json({ error: "Not found" });
  }
}
const my_rrs = async (req, res) => {
  try {
    const userId = req.user.id;
    let props = await rrs_props.find({ userid: userId });
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch {
    res.json({ error: "Not found" });
  }
}
const my_rpg = async (req, res) => {
  try {
    const userId = req.user.id;
    let props = await rpg_prop.find({ userid: userId });
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch {
    res.json({ error: "Not found" });
  }
}
const my_rfm = async (req, res) => {
  try {
    const userId = req.user.id;
    let props = await rfm_prop.find({ userid: userId });
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch {
    res.json({ error: "Not found" });
  }
}
const my_cmr = async (req, res) => {
  try {
    const userId = req.user.id;
    let props = await cmr_prop.find({ userid: userId });
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch {
    res.json({ error: "Not found" });
  }
}

const my_cms = async (req, res) => {
  try {
    const userId = req.user.id;
    let props = await cms_prop.find({ userid: userId });
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch {
    res.json({ error: "Not found" });
  }
}


const my_plot = async (req, res) => {
  try {
    const userId = req.user.id;
    let props = await plot_prop.find({ userid: userId });
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      let imageurls = []
      for (let post of prop.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      prop.images = imageurls
    }
    res.status(200).json(props);
  } catch {
    res.json({ error: "Not found" });
  }
}

const get_top_rr_prop = async (req, res) => {
  try {
    const props = await rr_props.find({}).limit(5);
    for (let p = 0; p < props.length; p++) {
      const data = props[p];
      let imageurls = []
      for (let post of data.images) {
        let posturl = await getObjectSignedUrl(post)
        imageurls.push(posturl)
      }
      data.images = imageurls
    }
    // console.log(props);

    res.status(200).json(props);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { add_plot_prop, add_rr_prop, single_rr_prop, get_rr_prop, add_rrs_prop, add_rpg_prop, add_rfm_prop, add_cmr_prop, add_cms_prop, get_plot, get_cms, get_cmr, get_rfm, get_rpg, get_rrs, single_rrs_prop, single_rpg_prop, single_rfm_prop, single_cmr_prop, single_cms_prop, single_plot_prop, my_rr, my_rrs, my_rpg, my_rfm, my_cmr, my_cms, my_plot, get_top_rr_prop };
