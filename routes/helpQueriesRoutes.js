const express = require("express"),
router=express.Router(),
controller=require("../controllers/helpQueriesControllers");

router.get("/", controller.getHelpQueries);
router.get("/getQueriesByID/:ID", controller.getHelpQueriesByID);
router.post("/", controller.postHelpQueries);
// router.delete("/", controller.deleteUserDiamonds);
// router.put("/", controller.putUserDiamonds);



module.exports=router