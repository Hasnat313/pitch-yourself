
const mongoose = require("mongoose");
const manageProjectsSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    projectTitle:String,
    Type:String,
    videoUrl:String,
    description:String,
    hashTags:[String],
    people:[String]
})

const manageProjectsModel=mongoose.model("Projects",manageProjectsSchema,"Projects");
module.exports=manageProjectsModel;