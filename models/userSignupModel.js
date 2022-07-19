
const mongoose = require("mongoose");
const signupSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    emailAddress:String,
    password:String,
    blocked:Boolean
})

const signupModel=mongoose.model("signups",signupSchema,"signups");
module.exports=signupModel;