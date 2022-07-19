const express = require("express"),
router=express.Router(),
controller=require("../controllers/logoutController");

// router.get("/", controller.getSignup);
router.get("/", controller.getLogout);
// router.delete("/", controller.deleteUserDiamonds);
// router.put("/", controller.putUserDiamonds);



module.exports=router