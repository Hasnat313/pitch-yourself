const express = require("express"),
router=express.Router(),
controller=require("../controllers/savePitchController");

router.get("/getSavedPitches", controller.getSavedPitches);
router.post("/newPitchToSave", controller.postPitchToSave);
// router.delete("/deleteSavedPitch", controller.deleteSavedPitch);
// router.put("/", controller.putQuestion);



module.exports=router