const express = require("express"),
router=express.Router(),
controller=require("../controllers/managePostsController");

router.get("/", controller.getPosts);
router.post("/", controller.postPost);
router.delete("/", controller.deletePost);
router.put("/", controller.putPost);



module.exports=router