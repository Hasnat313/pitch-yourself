const express = require("express"),
router=express.Router(),
controller=require("../controllers/userLoginController");

router.get("/sendOTP", controller.sendOtp);
router.get("/verifyOTP", controller.verifyOTP);
router.post("/", controller.postLogin);
// router.delete("/", controller.deleteUserDiamonds);
// router.put("/", controller.putUserDiamonds);



module.exports=router