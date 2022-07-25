const express = require("express"),
router=express.Router(),
controller=require("../controllers/manageQuestionController");

router.get("/", controller.getQuestion);
router.post("/", controller.postQuestion);
router.delete("/", controller.deleteQuestion);
router.put("/", controller.putQuestion);



module.exports=router