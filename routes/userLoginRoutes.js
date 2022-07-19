const express = require("express"),
router=express.Router(),
controller=require("../controllers/userLoginController");

// router.get("/", controller.getSignup);
router.post("/", controller.postLogin);
// router.delete("/", controller.deleteUserDiamonds);
// router.put("/", controller.putUserDiamonds);



module.exports=router