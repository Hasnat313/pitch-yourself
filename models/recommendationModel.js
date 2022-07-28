
const mongoose = require("mongoose");
const recommendationSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    userWhoRecommendID:mongoose.Schema.Types.ObjectId,
    userToWhomRecommendID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true},

    profileID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true},

    pitchID:mongoose.Schema.Types.ObjectId,
    data:String,
    Type:{
        type:String,
        required:true
    }
})

const recommendationModel=mongoose.model("recommendations",recommendationSchema,"recommendations");
module.exports=recommendationModel;

    