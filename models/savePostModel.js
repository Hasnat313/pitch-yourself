
const mongoose = require("mongoose");
const savePostSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    pitchIDPost:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Posts',
    
    },
    userID:mongoose.Schema.Types.ObjectId,
    Type:String,
  
})

const savePostModel=mongoose.model("savePost",savePostSchema,"savePost");
module.exports=savePostModel;