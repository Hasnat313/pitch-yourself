const mongoose = require("mongoose");

const docModel = require("../models/docModel");
const profileModel = require("../models/ProfileModel");
const documentStatusModel = require("../models/docDownloadStatusModel");
const { response } = require("express");
// const profileModel = require("../models/ProfileModel");

// exports.getProfileVideos = (req, res) => {
//   // id=req.body.id;
//   userID=req.body.userID,
//   profileID=req.body.profileID
//   profileVideoModel.find({userID:userID,profileID:profileID}, (err, data) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(data);
//     }
//   });
// };

exports.postDoc = (req, res) => {
   const docUrl=req.body.docUrl;
   const private=req.body.privateStatus
   const userID=req.body.userID
   const profileID=req.body.profileID
  const newdoc = new docModel({
    _id: mongoose.Types.ObjectId(),
    docUrl:docUrl,
    private:private,
    userID:userID,
    profileID:profileID
    
  });

  newdoc.save(function (err, result) {
    if (!err) {
        res.json(result)
        profileModel.findOne({_id:profileID,userID:userID},(err,data)=>{
          if(!err){
            var arr=[];
            arr=data.docUrl;
            arr.push(result._id);
          profileModel.updateOne({_id:profileID,userID:userID},{docUrl:arr},(err,data)=>{
            console.log(data);
        })}
        })
        



    }
    else{
        res.json(err)
    }
  })
}
exports.downloadDocRequest=(req,res)=>{
  const docID=req.body.docID
  const userID=req.body.userID
  const profileID=req.body.profileID;
  
  const userIDWhoRequested=req.body.userIDWhoRequested;

  const newdocStatus = new documentStatusModel({
    _id: mongoose.Types.ObjectId(),
    docID:docID,
    userID:userID,
    profileID:profileID,
    grantAccess:"pending",
    userIDWhoRequested:userIDWhoRequested,
  })
  newdocStatus.save(function(err,result){
    if(!err){
      res.json(result);
    } 
    else{ 
      res.json(err)
    }
    })


}

exports.changeStatusTrue =(req, res)=>{
  const requestID=req.body.requestID;
  documentStatusModel.updateOne({_id:requestID},{grantAccess:"true"},(err,data)=>{
    if(!err) {
      res.json(data);
    }
    else{
    res.json(err);
    }
  });
}
exports.changeStatusFalse =(req, res)=>{
  const requestID=req.body.requestID;
  documentStatusModel.updateOne({_id:requestID},{grantAccess:"false"},(err,data)=>{
    if(!err) {
      res.json(data);
    }
    else{
    res.json(err);
    }
  });
}