
const mongoose = require("mongoose");
const manageJobsSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    companyName:String,
    Type:String,
    jobTitle:String,
    jobDescription:String,
    videoUrl:String,
    location:String,
    salaryRange:String,
    startDate:String,
    hashTags:[String]
})

const manageJobsModel=mongoose.model("Jobs",manageJobsSchema,"Jobs");
module.exports=manageJobsModel;