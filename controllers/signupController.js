
const mongoose = require("mongoose");
const express= require("express");
const signupModel = require("../models/userSignupModel");
const bodyParser = require("body-parser");
const bcrypt =require("bcrypt")
const app=express();
app.use(bodyParser.json());




exports.getSignup=(req,res)=>{
    
    
    signupModel.find({},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
}
exports.getSingleUser=(req,res)=>{
    userID=req.body.userID;
    signupModel.find({_id:userID},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });

}
exports.postSignup=async (req,res)=>{

   
    const emailAddress=req.body.emailAddress;
    const password=req.body.password;
    const salt=await bcrypt.genSalt();
    const hashPassword= await bcrypt.hash(password, salt);

    const newSignup = new signupModel({
        _id:mongoose.Types.ObjectId(),
        emailAddress:emailAddress,
        password:hashPassword,
        blocked:false
        
    })
    newSignup.save(function(err,result){
        if(!err){
            res.json(result)
        }
        else{
            res.json(err);
        }
    });

}
// exports.deleteUserDiamonds=(req,res)=>{
//     const userId = req.body.userId;
//         userDiamondsModel.deleteOne({
//             userId: userId
//         }, (err,result)=>{
//             if(err){
//                 res.json(err)
//             }
//             else{
//                 res.json(result);
//             }
//         })
    
// }

exports.putSignupUserStatus=(req,res)=>{
    
    
    userID=req.body.userID;
        console.log(userID);
        signupModel.updateOne({
            _id:userID
        }, {
            blocked:true
        }, {
            
        }, function (err, foundResult) {
            try {
                if(foundResult){
                res.json(foundResult)}
                else{
                    res.json("No Match Found")
                }
            } catch (err) {
                res.send(err)
            }
        })

}
