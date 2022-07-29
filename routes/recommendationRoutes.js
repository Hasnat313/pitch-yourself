const express = require("express"),
router=express.Router(),
controller=require("../controllers/recommendationController");

router.get("/getByUserID", controller.getRecommendationByUserID);
router.get("/getByRecommendationID", controller.getRecommendationByID);
router.post("/", controller.postRecommendation);
// router.delete("/", controller.deleteJob);
// router.put("/", controller.putJob);



module.exports=router