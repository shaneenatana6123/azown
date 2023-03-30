const vender_service = require('../models/vender_service');
const { uploadFile, getObjectSignedUrl, deleteFile } = require("../Storage/s3");
const user = require('../models/user');
const crypto = require("crypto");
const Service = require('../models/service');
const service_lead = require('../models/service_lead');
const { default: mongoose } = require('mongoose');
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");



const createVenderService = async (req, res) => {
    try {
        const { service_name, service_description , service_charge , charge_unit,sub_service_name,service_id  } = req.body;
        const vender_id = req.user.id;

        const venderService = await vender_service.create({
            service_id,
            service_name,
            sub_service_name,
            service_description,
            service_charge,
            charge_unit,
            vender_id
        });

        res.status(201).json(venderService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const createService = async (req, res) => {
    const { file } = req;
    
    try {     
        let service_image = null;  
        if (file) {
            service_image = generateFileName()
     await uploadFile(  file.buffer , service_image ,  file.mimetype);
        }
        const { service_name, service_description } = req.body;
        const service = await Service.create({
            service_name,
            service_description,
            service_image
        });
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const fetchVenderByService = async (req, res) => {
    try {
        const { service_id } = req.params;
        const venderService = await vender_service.find({ service_id });
        // console.log(venderService)
       let venderId = []
        for (let i = 0; i < venderService.length; i++) {
            venderId.push(venderService[i].vender_id)
        }
        // console.log(venderId)
        const venderData = await user.find({ _id: { $in: venderId } });
        // console.log(venderData)
        for (let i = 0; i < venderService.length; i++) {
            for (let j = 0; j < venderData.length; j++) {
                if (venderService[i].vender_id == venderData[j]._id) {
                    let { name } = venderData[j]
                   let vender = {vender_name:name}
                    venderService[i] = {...venderService[i]._doc,...vender}
                    // console.log(venderService[i])
                }
            }
        }

        res.status(201).json(venderService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createServiceLead = async (req, res) => {
    try {
        const  service_lead_client_id  = req.user.id;
        const {  service_lead_vender_id, service_lead_stage } = req.body;
        const serviceLead = await service_lead.create({
            service_lead_client_id,
            service_lead_vender_id,
            service_lead_stage,
          
        });
        res.status(201).json(serviceLead);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateLeadStage = async (req, res) => {
    try {
        const { service_lead_id } = req.params;
        const { service_lead_stage } = req.body;
        const serviceLead = await service_lead.findByIdAndUpdate(service_lead_id, { service_lead_stage });
        res.status(201).json(serviceLead);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
};



module.exports = { createVenderService , createService  , fetchVenderByService ,createServiceLead , updateLeadStage }