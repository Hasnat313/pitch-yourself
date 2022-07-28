
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
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true},
    profileID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true}
})

const profileVideoModel=mongoose.model("profileVideos",profileVideoSchema,"profileVideos");
module.exports=profileVideoModel;










