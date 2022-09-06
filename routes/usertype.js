const router= require("express").Router();
const userController = require("../controllers/usertypeController")

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

// data post
router.post("/",userController.add_user);

// get all data
router.get("/",userController.user_all);

// get single data
router.get("/:userId",userController.signle_user);

// delete data
router.delete("/:userId",userController.delete_user);

// update single data
router.put("/:userId",userController.update_user);

// // for single file
// router.post('/profile', upload.single('avatar'), singleUpload);
  
//   // for multiple file
 router.post('/photos/upload/', upload.single('avatar'),userController.singleUpload);


module.exports = router;