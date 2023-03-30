const User = require("../models/user");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "shaneisgoodboy";
const { uploadFile, getObjectSignedUrl, deleteFile } = require("../Storage/s3");
const crypto = require("crypto");
const { findOne } = require("../models/vender_service");
const { vender_kyc, broker_kyc, user_kyc } = require("../models/kyc");
const user_template = require("../models/user_template");
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const createuser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        error: "Sorry a user with this email already exists",
      });
    }
    user = await User.findOne({ phone: req.body.phone });
    if (user) {
      return res.status(400).json({
        error: "Sorry a user with this phone number already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
      phone: req.body.phone,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({user, authtoken });
  } catch (error) {
    // console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(404).json({ err: err.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not exist" });
    }
    const passComapre = await bcrypt.compare(password, user.password);
    if (!passComapre) {
      return res.status(400).json({ error: "Invalid password" });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    return res.json({ user,authtoken });
  } catch {
    // console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const kycupdate = async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.file);
    const file = req.file;
    const fileBuffer = file.buffer;
    const imageName = generateFileName();

    const fileType = file.mimetype;
    uploadFile(fileBuffer, imageName, fileType);

    req.body = { ...req.body, ...{ imgname: imageName } };
    const {
      name,
      email,
      phone,
      description,
      dob,
      imgname,
      usertype,
      adharno,
      pancardno,
      landmark,
      street,
      city,
      state,
      country,
    } = req.body;

    // console.log(name);
    // console.log(imgname);
    const updatedata = await User.updateOne(
      { _id: req.user.id },
      {
        $set: {
          name,
          email,
          phone,
          description,
          dob,
          usertype,
          adharno,
          pancardno,
          landmark,
          street,
          city,
          state,
          country,
          imgname,
        },
      }
    );
    res.json({ success: "true" });
  } catch {
    res.json({ error: "not found" });
  }
};


const updateUserData = async (req, res) => {

  try {
    const file = req.file;
    if (file) {
      const fileBuffer = file.buffer;
      const imageName = generateFileName();
      const fileType = file.mimetype;
      uploadFile(fileBuffer, imageName, fileType);
      req.body = { ...req.body, ...{ img_url: imageName } };
    }
    console.log(req.body);
    const user = await User.findOne({ _id: req.user.id });
    if (!user) {
      return res.status(400).json({ error: "User not exist" });
    }
      console.log(user);
      console.log(user._id);
    const update = await User.findOneAndUpdate({_id: user._id}, req.body, {
      new: true,
    });
    console.log(update);
    return res.json({  message: "User Profile updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error:error.message });
  }
};

const getuserdetail = async (req, res) => {
  try {
    const userdata = await User.findOne({ _id: req.user.id });
    //  const imgurl   =await getObjectSignedUrl(userdata.imgname)
    //  userdata.imgname= imgurl

    res.json(userdata);
  } catch {
    res.json({ error: "not found" });
  }
};

const addVenderKyc = async (req, res) => {
  try {
    const { vender_aadhar , vender_pan , vender_gst } = req.body;
    // console.log(req.body);

    const vender_id = req.user.id;
    const vender = await User.findOne({ vender_id });
    if (vender) {
      return res.status(400).json({
        error: "Sorry already kyc is done for this vender kindly update it.",
      });
    }
    const venderKycData = await vender_kyc.create({
      vender_id,
      vender_aadhar,
      vender_pan,
      vender_gst,
    });
    res.status(201).json({ message: "Vender Kyc Added Successfully" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}


const updateVenderKyc = async (req, res) => {
  try {

      const updateData =  await vender_kyc.updateOne(
      { vender_id: req.user.id },
      {
        $set:req.body
      }
    );
    res.status(201).json({ message: "Vender Kyc Updated Successfully" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}


const addBrokerKyc = async (req, res) => {
  try {
    const { broker_aadhar , broker_pan , broker_gst } = req.body;
    // console.log(req.body);
    const broker_id = req.user.id;
    const broker = await broker_kyc.findOne({ broker_id });
    if (broker) {
      return res.status(400).json({
        error: "Sorry already kyc is done for this broker kindly update it.",
      });
    }
    const brokerKycData = await broker_kyc.create({
      broker_id,
      broker_aadhar,
      broker_pan,
      broker_gst,
    });
    res.status(201).json({ message: "Broker Kyc Added Successfully" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}


const updateBrokerKyc = async (req, res) => {
  try {
    const brokerUpdateData = await broker_kyc.updateOne(
      { broker_id: req.user.id },
      {
        $set:req.body
      }
    );
    res.status(201).json({ message: "Broker Kyc Updated Successfully" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}



const addUserKyc = async (req, res) => {
  try {
    const { user_aadhar , user_pan , user_gst } = req.body;
    // console.log(req.body);
    const user_id = req.user.id;
    const user = await user_kyc.findOne({ id: user_id});
    if (user) {
      return res.status(400).json({
        error: "Sorry already kyc is done for this user kindly update it.",
      });
    }
    const userKycData = await user_kyc.create({
      user_id,
      user_aadhar,
      user_pan,
      user_gst,
    });

    res.status(201).json({ message: "User Kyc Added Successfully" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const updateUserKyc = async (req, res) => {
  try {
    const userUpdateData = await user_kyc.updateOne(
      { user_id: req.user.id },
      {
        $set:req.body
      }
    );
    res.status(201).json({ message: "User Kyc Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}


const addTemplateData = async (req, res) => {
  try {
    const user_id = req.user.id;
  
    const { template_data } = req.body;
    console.log(req.body);
    const template = await user_template.create({
      user_id,
      template_data,
    });
    res.status(201).json({ message: "Template Added Successfully" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateTemplateData = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { template_data } = req.body;
    const template = await user_template.updateOne(
      { user_id },
      req.body
    );
    res.status(201).json({ message: "Template Updated Successfully" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const fetchTemplateData = async (req, res) => {
  try {
    const user_id = req.user.id;
      const template_data = await user_template.findOne({ user_id });
      res.status(201).json({ template_data });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const fetchVenderKyc = async (req, res) => {
  try {
    const vender_id = req.user.id;
    const vender_kyc_data = await vender_kyc.findOne({ vender_id });
    res.status(201).json({ vender_kyc_data });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchBrokerKyc = async (req, res) => {
  try {
    const broker_id = req.user.id;
    const broker_kyc_data = await broker_kyc.findOne({ broker_id });
    res.status(201).json({ broker_kyc_data });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchUserKyc = async (req, res) => {
  try {
    const user_id = req.user.id;
    const user_kyc_data = await user_kyc.findOne({
      user_id,
    });
    res.status(201).json({ user_kyc_data });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { createuser, login, kycupdate, getuserdetail , updateUserData , addVenderKyc , updateVenderKyc , addBrokerKyc , updateBrokerKyc , addUserKyc , updateUserKyc   , addTemplateData , updateTemplateData , fetchTemplateData , fetchVenderKyc , fetchBrokerKyc , fetchUserKyc };
