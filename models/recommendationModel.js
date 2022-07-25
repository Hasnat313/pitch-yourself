
const mongoose = require("mongoose");
const recommendationSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    userWhoRecommendID:mongoose.Schema.Types.ObjectId,
    userToWhomRecommendID:mongoose.Schema.Types.ObjectId,
    profileID:mongoose.Schema.Types.ObjectId,
    pitchID:mongoose.Schema.Types.ObjectId,
    data:String
})

const recommendationModel=mongoose.model("recommendations",recommendationSchema,"recommendations");
module.exports=recommendationModel;