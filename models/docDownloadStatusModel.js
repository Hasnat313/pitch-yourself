
const mongoose = require("mongoose");
const documentSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    docID:mongoose.Schema.Types.ObjectId,
    grantAccess:String,
    userIDWhoRequested:mongoose.Schema.Types.ObjectId,
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    profileID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
 
})

const documentStatusModel=mongoose.model("docDownloadStatus",documentSchema,"docDownloadStatus");
module.exports=documentStatusModel;