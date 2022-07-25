const mongoose = require("mongoose");
const express = require("express");
const signupModel = require("../models/userSignupModel");
const loginModel = require("../models/userLoginModel");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
// const session = require("express-session");
const app = express();
app.use(bodyParser.json());
app.use(express.json());
var count =0;
exports.getCheckLogin=(req,res)=>{

    session=req.session;
    const id=session.userid;
    if(session.userid){
        
        res.json("Welcome User <a href=\'/logout'>click to logout</a>"+session.count++);
    }else
    res.json("Not Logged In")
}

// exports.postLogin = async (req, res) => {
//   const emailAddress = req.body.emailAddress;
//   const password = req.body.password;
//   // const salt=await bcrypt.genSalt();
//   // const hashPassword= await bcrypt.hash(password, salt);

//   signupModel.find(({ emailAddress: emailAddress }), (err, data) => {
//     if (!err) {
//         if(data.length!=0){
//         checkUser(emailAddress,password);
//         async function checkUser(emailAddress, password) {
//             //... fetch user from a db etc.
        
//             const match = await bcrypt.compare(password, data[0].password);
        
//             if(match) {
//                 res.json("Login");
//             }
//             else{
//                 res.json("Wrong Password")
//             }
//         }
            
//         }
//         else{
//             res.json("Invalid Email");
//         }
//     } else {
//         res.json(data);


     
    
//     }
//   });

 



//   const newSignup = new signupModel({
//     _id: mongoose.Types.ObjectId(),
//     emailAddress: emailAddress,
//     password: hashPassword,
//   });
//   newSignup.save(function (err, result) {
//     if (!err) {
//       res.json(result);
//     } else {
//       res.json(err);
//     }
//   });
//};
