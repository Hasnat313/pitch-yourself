const express = require("express"),
router=express.Router(),
controller=require("../controllers/docController");

router.post("/addDoc", controller.postDoc);
router.post("/requestDownloadDoc", controller.downloadDocRequest);
router.put("/changeStatusTrue", controller.changeStatusTrue);
router.put("/changeStatusFalse", controller.changeStatusFalse);

// router.post("/", controller.postJob);
// router.delete("/", controller.deleteJob);
// router.put("/", controller.putJob);



module.exports=router