const express = require("express"),
router=express.Router(),
controller=require("../controllers/signupController");

router.get("/", controller.getSignup);
router.get("/singleUser", controller.getSingleUser);
router.post("/", controller.postSignup);
// router.delete("/", controller.deleteUserDiamonds);
router.put("/", controller.putSignupUserStatus);



module.exports=router