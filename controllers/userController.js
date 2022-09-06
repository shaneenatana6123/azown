const User = require("../model/User");
const BuyDashboard = require("../model/BuyDashboard");
const Property = require("../model/Property");


// for single file
const singleUpload = async (req, res, next)=>{
    console.log(req.file);

    res.json("users");
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  };


  // add new user
const add_property =async (req,res)=>{
    let date_ob = new Date();
    const property = new Property({
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
    })
    try{

        const users = await Property.find({OwnerId:{$in:[req.body.OwnerId]}});
        var buydash = users.length;
        buydash = buydash+1;
        const userNew = {
            UserTotalProperty: buydash.toString(),
        }
         const updateUser = await User.findByIdAndUpdate({ _id: req.body.OwnerId },userNew);
        
          const saveUser = await property.save();
          
        res.json({message: "User account created successfully",status: true,data:saveUser,date:date_ob})

    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};

const login = async(req,res)=>{
    try{
        const users = await User.find({mobile:{$in:[req.body.mobile]},pass:{$in:[req.body.pass]}});
        
        let date_ob = new Date();
        // if(user.length ==0){
        var len= users.length; 
        if(len ==0){
          

            res.json({message: "User account created successfully",status: false,data:users,date:date_ob,len:len})
        }else {
            res.json({message: "User account created successfully",status: true,data:users,date:date_ob,len:len})
        }
     
        // }else {

        //     res.json({message: "User account created successfully",status: true,data:users,date:date_ob})
        // }
    }catch(error){
        res.json({message: "Something was wrong",status: false,data:error})
    }
}

const UserType = async(req,res)=>{
    try{
        const users = await User.find({userType:{$in:[req.body.userType]}});
        

        let date_ob = new Date();
        // if(user.length ==0){
        var len= users.length; 
        if(len ==0){
          

            res.json({message: "User account created successfully",status: false,data:users,date:date_ob,len:len})
        }else {
            res.json({message: "User account created successfully",status: true,data:users,date:date_ob,len:len})
        }
     
        // }else {

        //     res.json({message: "User account created successfully",status: true,data:users,date:date_ob})
        // }
    }catch(error){
        res.json({message: "Something was wrong",status: false,data:error})
    }
}

// Get all User
const user_all = async (req, res)=>{
    try{
        const users = await User.find();
        res.json(users);

    }catch(error){
        res.json({message: "Something was wrong",status: false,data:error})
    }
};

// get Single user
const signle_user =async (req, res)=>{
    try{
        const users = await User.findById(req.params.userId);
        res.json(users);
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
    const user = new User({
        userType: req.body.userType,
        userName: req.body.userName,
        email: req.body.email,
        pass: req.body.pass,
        mobile: req.body.mobile,
        img: req.body.img,
        price: req.body.price,
        transactionId: req.body.transactionId,
        date: req.body.date,
        block: req.body.block,
        about: req.body.about,
        UserDOB: "dob",
    UserCountry: req.body.country,
    UserState: req.body.state,
    UserCity: req.body.city,
    UserStreet: req.body.street,
    UserLandmark: req.body.landmark,
    UserPancardNo: req.body.pancard,
    UserAadhaarNo: req.body.aadhaar,
    UserTotalDashboard: "0",
    UserTotalProperty: "0",
    })
    try{
        
          const saveUser = await user.save();
          let date_ob = new Date();
        res.json({message: "User account created successfully",status: true,data:saveUser,date:date_ob})

    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};

// update user
const update_user =async (req,res)=>{
    
    try{
        const userNew = {
            userType: req.body.userType,
            userName: req.body.userName,
            email: req.body.email,
            pass: req.body.pass,
            mobile: req.body.mobile,
            img: req.body.img,
            price: req.body.price,
            transactionId: req.body.transactionId,
            date: req.body.date,
            block: req.body.block,
            about: req.body.about,
            UserDOB: "dob",
            UserCountry: req.body.country,
            UserState: req.body.state,
            UserCity: req.body.city,
            UserStreet: req.body.street,
            UserLandmark: req.body.landmark,
            UserPancardNo: req.body.pancard,
            UserAadhaarNo: req.body.aadhaar,
            UserTotalDashboard: req.body.totaldashboard,
            UserTotalProperty: req.body.totalproperty,
        }
         const saveUser = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            userNew);
        res.json(saveUser)

    }catch(error){
        let date_ob = new Date();
        res.json({message: "Something was wrong",status: false,data:error,date:date_ob})
    }
};

// delete user
const delete_user =async (req,res)=>{
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.userId)
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

module.exports= {user_all, signle_user, add_user, update_user, delete_user,singleUpload, login,UserType, buyDashboard_user, add_property}