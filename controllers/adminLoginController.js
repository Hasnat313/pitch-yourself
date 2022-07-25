const mongoose = require("mongoose");
const express = require("express");

const adminLoginModel = require("../models/adminLoginModel");
const bodyParser = require("body-parser");

// const session = require("express-session");
const app = express();
app.use(bodyParser.json());
app.use(express.json());

exports.getAdminLogin=(req,res)=>{

    adminLoginModel.find({},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
}

exports.postAdminLogin = async (req, res) => {
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;
  // const salt=await bcrypt.genSalt();
  // const hashPassword= await bcrypt.hash(password, salt);

  adminLoginModel.find(({ emailAddress: emailAddress }), (err, data) => {
    if (!err) {
        if(data.length!=0){
        checkUser(emailAddress,password);
        async function checkUser(emailAddress, password) {
            //... fetch user from a db etc.
        
            // const match = await bcrypt.compare(password, data[0].password);
        
            if(password===data[0].password) {
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


exports.putAdminLogin=(req,res)=>{
   let emailAddress = req.body.emailAddress;
   let oldPassword = req.body.oldPassword;
   let newPassword = req.body.newPassword;
        adminLoginModel.findOneAndUpdate({emailAddress:emailAddress,password:oldPassword},
            {password:newPassword},{},(err,resp)=>{
            if(!err){
                res.json(resp);
            }
            else{
                res.json(err);
            }
        })
}
