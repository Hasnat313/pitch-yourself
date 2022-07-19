
const mongoose = require("mongoose");
const adminLoginSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    emailAddress:String,
    password:String
})

const adminLoginModel=mongoose.model("adminLogin",adminLoginSchema,"adminLogin");
module.exports=adminLoginModel;