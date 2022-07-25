const express = require("express"),
router=express.Router(),
controller=require("../controllers/manageProjectsController");

router.get("/", controller.getProjects);
router.post("/", controller.postProject);
router.delete("/", controller.deleteProject);
router.put("/", controller.putProject);



module.exports=router