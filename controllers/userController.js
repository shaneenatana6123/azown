const User = require("../model/User");
const BuyDashboard = require("../model/BuyDashboard");
const Property = require("../model/Property");
const db = require('../database');

// for single file
const singleUpload = async (req, res, next)=>{
    console.log(req.file);

    res.json(req.file);
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  };

const add_service = async (req,res)=>{
    let date_ob = new Date();
    var service_name = req.body.service_name;
    var service_desc = req.body.service_desc;
    var service_icon = req.body.service_icon;
    var value = "1";

    try{
        const users = await   db.promise().query(`INSERT INTO service (service_name, service_desc, service_icon, service_is_active) VALUES ('${service_name}', '${service_desc}', '${service_icon}', '${value}')`);



        res.json({message: "Services created successfully",status: true,data:users,date:date_ob})

    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
}

  // add new user
const add_property =async (req,res)=>{
    let date_ob = new Date();
 
    var proId = req.body.proId;
    var date = req.body.Date;
    var userid = req.body.OwnerId;
    var PropertyImage= req.body.PropertyImage;
    var PropertyType = req.body.PropertyType;
    var About = req.body.About;
    var PropertyAge = req.body.PropertyAge;
    var State= req.body.State;
    var City= req.body.City;
    var long = req.body.long;
    var lat = req.body.lat;
    var PropertyBuyType= req.body.PropertyBuyType;
    var FloorNo= req.body.FloorNo;
    var TotalFloor= req.body.TotalFloor;
    var PropertyAge = req.body.PropertyAge;
    var rent = req.body.rent;
    var imgquery =  '';
    try{
        const users = await   db.promise().query(`INSERT INTO property_master (property_id, property_user_id,
             property_posted_date, property_is_active, property_post_type, property_total_views,
              property_upgraded_view_end_date) VALUES ('${proId}', '${userid}', '${date}', '1', '0', '0', '${date}')`);


        

        const userimg = await   db.promise().query(`INSERT INTO property_images (images_auto_id, property_id,
            images_squence, images_path, images_alt, images_type,
            images_description) VALUES ('${proId}', '${proId}', '', '${PropertyImage}', '', '', '')`);

        if(PropertyType == "Residential"){
            //Residential
        }
        else
        if(PropertyType == "Commercial"){
            // Commercial
            if(PropertyBuyType == "Sale"){
                // Sale
                const userimg = await   db.promise().query(`INSERT INTO property_commercial_sale_cs (
                    cs_property_id,
                    cs_detail_description,
                    cs_detail_property_type,
                    cs_detail_building_type,
                    cs_detail_prop_age,
                    cs_detail_floor,
                    cs_detail_total_floor,
                    cs_detail_builtup_area,
                    cs_detail_furnishing,
                    cs_location_state,
                    cs_location_city,
                    cs_location_latitiude,
                    cs_location_longitude,
                    cs_location_iframe,
                    cs_resale_details_exp_price,
                    cs_resale_details_maintenance, 	
                    cs_resale_details_available_from,
                    cs_amenities_power_backup, 
                    cs_amenities_lift,
                    cs_amenities_parking, 
                    cs_amenities_washroom,
                    cs_amenities_water_storage,
                    cs_amenities_security,
                    cs_amenities_wifi) 
                     VALUES ('${proId}', '${About}',
                      ' ', '${PropertyAge}', '${FloorNo}', '${TotalFloor}', '', '${PropertyAge}', '${State}',
                      '${City}', '${lat}', '${long}',
                     '', '',
                      '', '',
                       '', '', 
                       '', '', 
                       '', '',
                       '', '')`);
            }
            else
            if(PropertyBuyType == "Rent"){
                // Rent
                const userimg = await   db.promise().query(`INSERT INTO property_commercial_rent_cr (
                    cr_property_id,
                    cr_detail_description,
                    cr_detail_property_type,
                    cr_detail_building_type,
                    cr_detail_prop_age,
                    cr_detail_floor,
                    cr_detail_total_floor,
                    cr_detail_builtup_area,
                    cr_detail_furnishing,
                    cr_location_state,
                    cr_location_city,
                    cr_location_latitiude,
                    cr_location_longitude,
                    cr_location_iframe,
                    cr_rental_detail_rent,
                    cr_rental_detail_exp_deposit, 	
                    cr_rental_detail_is_nogotiable,
                    cr_rental_detail_monthly_maintenance, 
                    cr_rental_detail_avail_from,
                    cr_rental_detail_lease_duration, 
                    cr_rental_detail_lockin_period,
                    cr_amenities_power_backup,
                    cr_amenities_lift,
                    cr_amenities_parking, 
                    cr_amenities_washroom,
                    cr_amenities_water_storage,
                    cr_amenities_security,
                    cr_amenities_wifi) 
                     VALUES ('${proId}', '${About}',
                      ' ', '${PropertyAge}', '${FloorNo}', '${TotalFloor}', '', '${PropertyAge}', '${State}',
                      '${City}', '${lat}', '${long}',
                     '', '',
                      '${rent}', '',
                       '', '', 
                       '', '', 
                       '', '',
                       '', '',
                       '','',
                       '','')`);
            }
        }
        else
        if(PropertyType == "Land"){
            // Land
        }
        else
        if(PropertyType == "Plot"){
            // Plot
            const userimg = await   db.promise().query(`INSERT INTO property_plot_sale_ps (ps_property_id, ps_detail_description,
                ps_detail_plot_length, ps_detail_plot_width,
                 ps_detail_width_of_facing_road, ps_detail_has_boundary,
                 ps_detail_inside_gated_project,
                 ps_rules_allowed_floors, ps_location_state,
                 ps_location_city, ps_location_latitiude,
                 ps_location_longitude, ps_sale_detail_price,
                 ps_sale_detail_available_from, ps_sale_detail_is_negotiable,
                 ps_sale_detail_currently_under_loan,ps_amenities_water,
                 ps_amenities_sewage_connection, ps_amenities_gated_security,
                 ps_amenities_electricity_connection, ps_info_ownership,
                 ps_info_khata_certificate_is_available,ps_info_conversion_certificate_is_available,
                 ps_info_sale_deed_certificate_is_available, ps_info_encumbrance_certificate_is_available,
                 ps_info_is_rera_approved) 
                 VALUES ('${proId}', '${About}', '${PropertyAge}', '', '', '', '', '', '${State}', '${City}', '${lat}', '${long}',
                 '', '', '', '', '', '', '', '', '', '','', '','','')`);
        }
        else
        {
            // Flat
        }
  //      const userss = await Property.find({OwnerId:{$in:[req.body.OwnerId]}});
        // var buydash = users.length;
        // buydash = buydash+1;
        // const userNew = {
        //     UserTotalProperty: buydash.toString(),
        // }
        //  const updateUser = await User.findByIdAndUpdate({ _id: req.body.OwnerId },userNew);
        
        //   const saveUser = await property.save();
          
        res.json({message: "User account created successfully",status: true,data:userid,date:date_ob})

    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};

const login = async(req,res)=>{
    const mobile = req.body.mobile;
    const pass = req.body.pass;
    try{
    const users = await   db.promise().query(`SELECT * FROM user_master WHERE user_number = '${mobile}' AND user_password = '${pass}'`);
    //    const users = await User.find({mobile:{$in:[req.body.mobile]},pass:{$in:[req.body.pass]}});
        
        let date_ob = new Date();
        // if(user.length ==0){
        var len= users[0].length; 
        if(len ==0){
          

            res.json({message: "Wrong credentials",status: false,date:date_ob,len:len})
        }else {
            res.json({message: "User Login successfully",status: true,data:users[0],date:date_ob,len:len})
        }
     
        // }else {

        //     res.json({message: "User account created successfully",status: true,data:users,date:date_ob})
        // }
    }catch(error){
        res.json({message: "Something was wrong",status: false,data:error})
    }
}

const UserType = async(req,res)=>{
    const userType = req.body.userType;
    try{
        const users = await   db.promise().query(`SELECT * FROM user_master WHERE user_type = '${userType}'`);
    //    const users = await User.find({userType:{$in:[req.body.userType]}});
        

        let date_ob = new Date();
        // if(user.length ==0){
        var len= users[0].length; 
        if(len ==0){
          

            res.json({message: "Get User successfully",status: false,data:users[0],date:date_ob,len:len})
        }else {
            res.json({message: "Get User successfully",status: true,data:users[0],date:date_ob,len:len})
        }
     
        // }else {

        //     res.json({message: "User account created successfully",status: true,data:users,date:date_ob})
        // }
    }catch(error){
        res.json({message: "Something was wrong",status: false,data:error})
    }
}

// get All property
const user_property_all = async (req, res)=>{
    try{
        const property = await Property.find();
        res.json(property);

    }catch(error){
        res.json({message:"Something was wrong",status: false, data: error})
    }
}

// Get all service
const service_all = async (req, res)=>{
    try{
        const users = await   db.promise().query(`SELECT * FROM service`);
      //  const users = await User.find();
        res.json(users[0]);

    }catch(error){
        res.json({message: "Something was wrong",status: false,data:error})
    }
};
// Get all User
const user_all = async (req, res)=>{
    try{
        const users = await   db.promise().query(`SELECT * FROM user_master`);
      //  const users = await User.find();
        res.json(users[0]);

    }catch(error){
        res.json({message: "Something was wrong",status: false,data:error})
    }
};

// get Single user
const signle_user =async (req, res)=>{



    const userId = req.params.userId;
   
   
    try{
        const users = await   db.promise().query(`SELECT * FROM user_master WHERE user_id = '${userId}'`);
     
        res.json(users[0]);
    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};


// get Single user
const signle_services =async (req, res)=>{



    const userId = req.params.userId;
   
   
    try{
        const users = await   db.promise().query(`SELECT * FROM service WHERE service_id = '${userId}'`);
     
        const user = users[0];
        res.json(user[0]);
    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};



// get Single property
const signle_property =async (req, res)=>{
    try{
        const property = await Property.findById(req.params.propertyId);
        res.json(property);
    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};


const buyDashboard_user = async (req,res)=>{
    let date_ob = new Date();
    const buyDashboard = new BuyDashboard({
        userName: req.body.userName,
        userId: req.body.userId,
        mobile: req.body.mobile,
        Price: req.body.Price,
        transactionId: req.body.transactionId,
        status: req.body.status,
        block: req.body.block,
        dateAndTime: date_ob,

    })

    try{
        const users = await BuyDashboard.find({userId:{$in:[req.body.userId]}});
        var buydash = users.length;

        buydash = buydash+1;
        const userNew = {
            UserTotalDashboard: buydash.toString(),
        }
         const updateUser = await User.findByIdAndUpdate({ _id: req.body.userId },userNew);

        const saveUser = await buyDashboard.save();
        let date_ob = new Date();
      res.json({message: "Your dashboard buy successfully",status: true,data:saveUser,date:date_ob})

  }catch(error){
      let date_ob = new Date();
      res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
  }
}

// add new user
const add_user =async (req,res)=>{
    
    var userName = req.body.userName;
    var email= req.body.email;
    var pass= req.body.pass;

    var mobile = req.body.mobile;
    var img= req.body.img;
    var about= req.body.about;

    var userType= req.body.userType;
    var bock= "0";
    let date_ob = new Date();
    const start = Date.now();
    try{
        
        const users = await   db.promise().query(`INSERT INTO user_master (user_id, user_name, user_email, user_number, user_password, user_image, user_details, user_type, user_is_blocked) VALUES ('${start}','${userName}', '${email}', '${mobile}', '${pass}', '${img}', '${about}', '${userType}', '${bock}')`);



        res.json({message: "User created successfully",status: true,data:users,date:date_ob})
        //   const saveUser = await user.save();
        //   let date_ob = new Date();
        // res.json({message: "User account created successfully",status: true,data:saveUser,date:date_ob})

    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};




// update user
const update_user =async (req,res)=>{
    
    try{
        var userId = req.params.userId;
        var userName = req.body.userName;
        var user_email = req.body.email;
        var user_number = req.body.mobile;
        var user_password = req.body.pass;
        var user_details = req.body.user_details;

        const saveUser = await   db.promise().query(`UPDATE user_master SET user_name = '${userName}',
        user_email = '${user_email}', user_number = '${user_number}', user_password = '${user_password}',
         user_details = '${user_details}', WHERE user_id = '${userId}'`);
        //  const saveUser = await User.findByIdAndUpdate(
        //     { _id: req.params.userId },
        //     userNew);
        res.json(saveUser)

    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};





// update user
const update_service =async (req,res)=>{
    
    try{
        var userId = req.params.userId;
        var service_name = req.body.service_name;
        var service_desc = req.body.service_desc;
        var service_icon = req.body.service_icon;

        const saveUser = await   db.promise().query(`UPDATE service SET service_name = '${service_name}',
        service_desc = '${service_desc}', service_icon = '${service_icon}', WHERE user_id = '${userId}'`);
        //  const saveUser = await User.findByIdAndUpdate(
        //     { _id: req.params.userId },
        //     userNew);
        res.json(saveUser)

    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};



// update property
const update_property =async (req,res)=>{
    
    try{
        const userNew = {
            Country: req.body.Country,
            State: req.body.State,
            City: req.body.City,
            Street: req.body.Street,
            Landmark: req.body.Landmark,
            Address: req.body.Address,
            BildingName: req.body.BildingName,
            flatNo: req.body.flatNo,
            ownerName: req.body.ownerName,
            OwnerId: req.body.OwnerId,
            PropertyImage: req.body.PropertyImage,
            PropertySize: req.body.PropertySize,
            About: req.body.About,
            PropertyType: req.body.PropertyType,
            PropertyBuyType: req.body.PropertyBuyType,
            BHKType: req.body.BHKType,
            FloorNo: req.body.FloorNo,
            TotalFloor: req.body.TotalFloor,
            PropertyAge: req.body.PropertyAge,
            Facing: req.body.Facing,

            Zipcode: req.body.Zipcode,
            lat: req.body.lat,
            long: req.body.long,
            rent: req.body.rent,
            MonthyMaintenance: req.body.MonthyMaintenance,

            Deposit: req.body.Deposit,
            LeaseDuration: req.body.LeaseDuration,
            HanderID: req.body.HanderID,
            Date: req.body.Date,
        }
         const saveProperty = await Property.findByIdAndUpdate({ _id: req.params.propertyId },userNew);
        res.json(saveProperty)

    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};


// delete services
const delete_service =async (req,res)=>{
    const userId = req.params.userId;
    try{

        const deleteUser = await   db.promise().query(`DELETE FROM service WHERE service_id = '${userId}'`);
  //      const deleteUser = await User.findByIdAndDelete(req.params.userId)
        if(deleteUser !=null){
            res.json(deleteUser)
        }else {
            let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:"Data not found",date:date_ob})
   
        }
        
    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};

// delete user
const delete_user =async (req,res)=>{
    const userId = req.params.userId;
    try{

        const deleteUser = await   db.promise().query(`DELETE FROM user_master WHERE user_id = '${userId}'`);
  //      const deleteUser = await User.findByIdAndDelete(req.params.userId)
        if(deleteUser !=null){
            res.json(deleteUser)
        }else {
            let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:"Data not found",date:date_ob})
   
        }
        
    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};


// delete property
const delete_property =async (req,res)=>{
    try{
        const deleteProperty = await Property.findByIdAndDelete(req.params.propertyId)
        if(deleteProperty !=null){
            res.json(deleteProperty)
        }else {
            let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:"Data not found",date:date_ob})
   
        }
        
    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};

module.exports= {user_all, signle_user, add_user, update_user, delete_user,singleUpload, login,UserType, 
    buyDashboard_user, add_property, user_property_all, delete_property, signle_property, update_property,
    add_service,service_all, delete_service, signle_services, update_service}