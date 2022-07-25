const express = require("express"),
router=express.Router(),
controller=require("../controllers/manageJobsController");

router.get("/", controller.getJobs);
router.post("/", controller.postJob);
router.delete("/", controller.deleteJob);
router.put("/", controller.putJob);



module.exports=router