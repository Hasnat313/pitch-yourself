const express = require("express"),
router=express.Router(),
controller=require("../controllers/docController");

router.post("/addDoc", controller.postDoc);
router.get("/downloadDoc", controller.downloadDoc);
// router.post("/", controller.postJob);
// router.delete("/", controller.deleteJob);
// router.put("/", controller.putJob);



module.exports=router