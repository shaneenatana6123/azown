const router= require("express").Router();
const userController = require("../controllers/userController")

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+file.originalname)
    }
  })
const upload = multer({ storage: storage })

router.post("/login/",userController.login);

router.post("/UserType",userController.UserType);

// data post
router.post("/",userController.add_user);

// data post
router.post("/buyDashboard",userController.buyDashboard_user);


// add_service
router.post("/addservice",userController.add_service);


// data property
router.post("/property",userController.add_property);


// get all data
router.get("/getService",userController.service_all);

// get all data
router.get("/",userController.user_all);


// get all property data
router.get("/property",userController.user_property_all);

// get single data
router.get("/:userId",userController.signle_user);


// get single data
router.get("/service/:userId",userController.signle_services);


// get single property
router.get("/property/:propertyId",userController.signle_property);


// delete property data
router.delete("/property/:propertyId",userController.delete_property);
// delete data services
router.delete("/:userId",userController.delete_user);

// delete data services
router.delete("/services/:userId",userController.delete_service);



// update single property data
router.put("/property/:propertyId",userController.update_property);

// update single data
router.put("/:userId",userController.update_user);



// update single data
router.put("/service/:userId",userController.update_service);

// // for single file
// router.post('/profile', upload.single('avatar'), singleUpload);
  
//   // for multiple file
 router.post('/photos/upload/', upload.single('avatar'),userController.singleUpload);


module.exports = router;