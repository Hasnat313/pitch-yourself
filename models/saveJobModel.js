
const mongoose = require("mongoose");
const saveJobSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    pitchIDJob:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Jobs',
      
    },
    userID:mongoose.Schema.Types.ObjectId,
    Type:String,
  
})

const saveJobModel=mongoose.model("saveJob",saveJobSchema,"saveJob");
module.exports=saveJobModel;