const User = require("../model/Usertype");


// for single file
const singleUpload = async (req, res, next)=>{
    console.log(req.file);

    res.json("users");
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  };


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

// add new user
const add_user =async (req,res)=>{
    const user = new User({
        userType: req.body.userType,
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

module.exports= {user_all, signle_user, add_user, update_user, delete_user,singleUpload}