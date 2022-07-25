
const mongoose = require("mongoose");
const profileSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    userID:mongoose.Schema.Types.ObjectId,
    emailAddress:String,
    postID:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Posts'
    }],
    questionID:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Questions'
    }],
    projectID:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Projects'
    }],
    jobID:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Jobs'
    }],
    photoUrl:String,
    name:String,
    proffesion:String,
    bio:String,
    totalPosts:Number,
    hashTags:[String],
    description:String,
    socialLinks:[String],
    videoUrl:String,
    docUrl:String,

    
})

const profileModel=mongoose.model("profile",profileSchema,"profile");
module.exports=profileModel;