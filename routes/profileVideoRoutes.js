const express = require("express"),
router=express.Router(),
controller=require("../controllers/profileVideoController");


router.post("/", controller.postProfileVideo);
router.get("/", controller.getProfileVideos);
router.delete("/", controller.deleteProfileVideo);
router.put("/", controller.putProfileVideo);



module.exports=router