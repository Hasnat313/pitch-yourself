
const mongoose = require("mongoose");
const managePostsSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    postTitle:String,
    Type:String,
    videoUrl:String,
    creators:[String],
    hashTags:[String],
    recommendation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"recommendations"
    }],
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

})

const managePostsModel=mongoose.model("Posts",managePostsSchema,"Posts");
module.exports=managePostsModel;