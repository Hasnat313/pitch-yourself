const express = require("express"),
router=express.Router(),
controller=require("../controllers/checkUserLoginController");

// router.get("/", controller.getSignup);
router.get("/", controller.getCheckLogin);
// router.delete("/", controller.deleteUserDiamonds);
// router.put("/", controller.putUserDiamonds);



module.exports=router