const mongoose = require("mongoose");
const express = require("express");
const signupModel = require("../models/userSignupModel");
const loginModel = require("../models/userLoginModel");
const userOTPVerificationModel = require("../models/userOTPVerificationModel");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const { search } = require("../routes/homeRoute");
require('dotenv').config();
// const session = require("express-session");
const app = express();
app.use(bodyParser.json());
app.use(express.json());
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
       user: process.env.email,
       pass: process.env.password,
    },
});

// exports.getSignup=(req,res)=>{

//     signupModel.find({},(err,data)=>{
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(data);
//         }
//     });
// }

exports.postLogin = async (req, res) => {
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;
  // const salt=await bcrypt.genSalt();
  // const hashPassword= await bcrypt.hash(password, salt);

  signupModel.find(({ emailAddress: emailAddress }), (err, data) => {
    if (!err) {
        if(data.length!=0){
        checkUser(emailAddress,password);
        async function checkUser(emailAddress, password) {
            //... fetch user from a db etc.
        
            const match = await bcrypt.compare(password, data[0].password);
        
            if(match) {
                session=req.session;
                session.userid=req.body.emailAddress;
                session.count=0;
                console.log(req.session)
                res.json(data);
            }
            else{
                res.json("Wrong Password")
            }
        }
            
        }
        else{
            res.json("Invalid Email");
        }
    } else {
        res.json(err);


     
    
    }
  });
}
 
exports.sendOtp=(req,res)=>{

    try{

        emailAddress=req.body.emailAddress;
        const otp= `${Math.floor(1000+Math.random()*9000)}`
        console.log(otp)
       

         
       const newOTPVerif= new userOTPVerificationModel({
        // userId:_id,
        emailAddress:emailAddress,
        otp : otp,
       })
       
        newOTPVerif.save();
        transporter.sendMail({
            from:process.env.EMAIL_USERNAME,
             to: emailAddress,
             subject: 'Verify Account',
             html: "<h3>OTP for Pitch YourSelf </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>"
             
           });
           res.json({
             message: `Sent a verification email to ${emailAddress}`,
             status:"pending",
             data:{
                otp:otp
             }
           });

    }
    catch(err){
        
    }

}


exports.verifyOTP=(req,res)=>{

    otp=req.body.otp;
    emailAddress=req.body.emailAddress;
    newPassword=req.body.newPassword
    userOTPVerificationModel.findOne({emailAddress:emailAddress,otp:otp},(err,data)=>{

        if(!err && data!=null){
            signupModel.updateOne({emailAddress:emailAddress},{password:newPassword},(err,data)=>{
              if(!err) {
                console.log("cjk");
                res.json(data);
                setTimeout(() => {
                    userOTPVerificationModel.deleteOne({emailAddress:emailAddress},(err,data)=>{
                        if(!err){
                            console.log(data);
                        }
                    })
            }, 200);
            }
              else{
                res.json(err);
              }
            })

          
        }
        else{
            res.json(err);
        }
        
    })
 

}