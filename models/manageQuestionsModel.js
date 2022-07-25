
const mongoose = require("mongoose");
const manageQuestionSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    questionTitle:String,
    videoUrl:String,
    Type:String,
    questionReason:String,
    hashTags:[String]
})

const manageQuestionModel=mongoose.model("Questions",manageQuestionSchema,"Questions");
module.exports=manageQuestionModel;