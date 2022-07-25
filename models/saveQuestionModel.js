
const mongoose = require("mongoose");
const saveQuestionSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    pitchIDQuestion:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Questions',
    
    },
    userID:mongoose.Schema.Types.ObjectId,
    Type:String,
  
})

const saveQuestionModel=mongoose.model("saveQuestion",saveQuestionSchema,"saveQuestion");
module.exports=saveQuestionModel;