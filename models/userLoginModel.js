
const mongoose = require("mongoose");
const loginSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    emailAddress:String,
    password:String
})

const loginModel=mongoose.model("login",loginSchema,"login");
module.exports=loginModel;