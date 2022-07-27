const mongoose = require("mongoose");

const docModel = require("../models/docModel");
const profileModel = require("../models/ProfileModel");
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
exports.downloadDoc=(req,res)=>{
  const docID=req.body.docID
  const userID=req.body.userID
  const profileID=req.body.profileID;
  docModel.find({_id:docID,userID:userID,profileID:profileID},(err,data)=>{
    if(!err){
      res.json(data);
    }
  })


}