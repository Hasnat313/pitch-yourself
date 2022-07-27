
const mongoose = require("mongoose");
const profileVideoSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    videoTitle:String,
    videoUrl:String,
    description:String,
    hashTags:[String],
    pdfUrl:String,
    uploadImage:String,
    links:[String],
    contacts:[String],
    userID:mongoose.Schema.Types.ObjectId,
    profileID:mongoose.Schema.Types.ObjectId
})

const profileVideoModel=mongoose.model("profileVideos",profileVideoSchema,"profileVideos");
module.exports=profileVideoModel;