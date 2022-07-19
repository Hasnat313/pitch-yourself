const express = require("express"),
router=express.Router(),
controller=require("../controllers/adminLoginController");

router.get("/", controller.getAdminLogin);
router.post("/", controller.postAdminLogin);
// router.delete("/", controller.deleteUserDiamonds);
router.put("/", controller.putAdminLogin);



module.exports=router