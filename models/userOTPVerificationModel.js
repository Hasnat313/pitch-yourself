const mongoose=require("mongoose")
const Schema= mongoose.Schema

const UserOTPVerificationSchema = new mongoose.Schema({
    // userId:String,
    emailAddress:String,
    otp : String
})
const UserOTPVerificationModel= mongoose.model("userOTPVerification" , UserOTPVerificationSchema)
module.exports=UserOTPVerificationModel;