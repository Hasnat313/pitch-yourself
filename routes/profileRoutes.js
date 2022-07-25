// const multer  = require('multer')
// // const upload = multer({ dest: './profileData' })
const express = require("express"),
router=express.Router(),
controller=require("../controllers/profileController");
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './profileData/profilePhoto')
//     },
//     filename: function (req, file, cb) {
//     //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.originalname)
//     }
//   })
//   const upload = multer({ storage: storage })
router.get("/getProfile/:id", controller.getProfile);
router.get("/getAllProfile", controller.getAllProfile);
router.post("/completeProfile", controller.postCompleteProfile);
// router.delete("/", controller.deleteUserDiamonds);
router.put("/updateProfile", controller.putUpdateProfile);



module.exports=router