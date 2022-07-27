
const mongoose = require("mongoose");
const manageProjectsSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    projectTitle:String,
    Type:String,
    videoUrl:String,
    description:String,
    hashTags:[String],
    people:[String],
    userID:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    profileID:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    recommendation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"recommendations"
    }],
})

const manageProjectsModel=mongoose.model("Projects",manageProjectsSchema,"Projects");
module.exports=manageProjectsModel;