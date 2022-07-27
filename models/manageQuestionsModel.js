
const mongoose = require("mongoose");
const manageQuestionSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    questionTitle:String,
    videoUrl:String,
    Type:String,
    questionReason:String,
    hashTags:[String],
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
    recommendation:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"recommendations"
    }],
})

const manageQuestionModel=mongoose.model("Questions",manageQuestionSchema,"Questions");
module.exports=manageQuestionModel;