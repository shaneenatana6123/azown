const rr_props = require("../models/rr_propery");
const rr_master = require("../models/property_master");
const { uploadFile, getObjectSignedUrl, deleteFile } = require("../Storage/s3");
const rrs_props = require('../models/rrs_props')
const rpg_prop = require('../models/rr-pg')
const rfm_prop = require('../models/rr-flat')
const cmr_prop = require('../models/cm-rent')
const cms_prop = require('../models/cm-sale')
const plot_prop = require('../models/land-plot')
const crypto = require("crypto");
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");


const single_rr_prop = async (req, res) => {

  try {
    const _id = req.params.id
    const imageurls = []
    const data = await rr_props.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
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
    const data = await rrs_props.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
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
    const data = await rpg_prop.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
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
    const data = await rfm_prop.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
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
    const data = await cmr_prop.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
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
    const data = await cms_prop.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
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
    const data = await plot_prop.findOne({ _id })

    // console.log(data);
    for (let post of data.images) {
      let posturl = await getObjectSignedUrl(post)
      imageurls.push(posturl)
    }
    //  console.log(imageurls);
    data.images = imageurls
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
    const newdata = { ...req.body, ...user, ...handle, ...img };
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
    console.log(req.body);
    const user = { userid: req.user.id };
    const handle = { handlerid: req.user.id };
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
    const newdata = { ...req.body, ...user, ...handle, ...img };
    console.log(newdata);
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
    console.log(req.body);
    const user = { userid: req.user.id };
    const handle = { handlerid: req.user.id };
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
    const newdata = { ...req.body, ...user, ...handle, ...img };
    console.log(newdata);
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
    const newdata = { ...req.body, ...user, ...handle, ...img };
    console.log(newdata);
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
    const newdata = { ...req.body, ...user, ...handle, ...img };
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
    const newdata = { ...req.body, ...user, ...handle, ...img };
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
    const newdata = { ...req.body, ...user, ...handle, ...img };
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
    const rr_properties = await rr_props.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    res.status(200).json(rr_properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}


const get_rrs = async (req, res) => {
  try {
    const rrs_properties = await rrs_props.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    res.status(200).json(rrs_properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_rpg = async (req, res) => {
  try {
    const rpg_properties = await rpg_prop.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    res.status(200).json(rpg_properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_rfm = async (req, res) => {
  try {
    const rfm_properties = await rfm_prop.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    res.status(200).json(rfm_properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_cmr = async (req, res) => {
  try {
    const cmr_properties = await cmr_prop.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    res.status(200).json(cmr_properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_cms = async (req, res) => {
  try {
    const cms_properties = await cms_prop.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    res.status(200).json(cms_properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}
const get_plot = async (req, res) => {
  try {
    const plot_properties = await plot_prop.find({
      // userid: { $not: { $eq: req.user.id } },
    });
    // console.log(rr_properties);
    res.status(200).json(plot_properties);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { add_plot_prop, add_rr_prop, single_rr_prop, get_rr_prop, add_rrs_prop, add_rpg_prop, add_rfm_prop, add_cmr_prop, add_cms_prop, get_plot, get_cms, get_cmr, get_rfm, get_rpg, get_rrs ,single_rrs_prop,single_rpg_prop,single_rfm_prop, single_cmr_prop,single_cms_prop,single_plot_prop};
