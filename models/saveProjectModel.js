
const mongoose = require("mongoose");
const saveProjectSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    pitchIDProject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Projects',
        
    },
    userID:mongoose.Schema.Types.ObjectId,
    Type:String,
  
})

const saveProjectModel=mongoose.model("saveProject",saveProjectSchema,"saveProject");
module.exports=saveProjectModel;