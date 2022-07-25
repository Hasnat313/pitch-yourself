const express = require("express"),
router=express.Router(),
controller=require("../controllers/recommendationController");

// router.get("/", controller.getJobs);
router.post("/", controller.postRecommendation);
// router.delete("/", controller.deleteJob);
// router.put("/", controller.putJob);



module.exports=router