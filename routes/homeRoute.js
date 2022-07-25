const express = require("express"),
router=express.Router(),
controller=require("../controllers/homeController");

router.get("/", controller.getAllProfileAllPitches);
// router.post("/", controller.postJob);
// router.delete("/", controller.deleteJob);
// router.put("/", controller.putJob);



module.exports=router