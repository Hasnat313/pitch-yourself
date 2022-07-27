const mongoose = require("mongoose");

const profileVideoModel = require("../models/profileVideoModel");
const profileModel = require("../models/ProfileModel");
// const profileModel = require("../models/ProfileModel");

exports.getProfileVideos = (req, res) => {
  // id=req.body.id;
  userID=req.body.userID,
  profileID=req.body.profileID
  profileVideoModel.find({userID:userID,profileID:profileID}, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
};

exports.postProfileVideo = (req, res) => {
    const videoTitle=req.body.videoTitle;
    const videoUrl=req.body.videoUrl;
    const description=req.body.description;
    const hashTags=req.body.hashTags;
    const pdfUrl=req.body.pdfUrl;
    const uploadImage=req.body.uploadImage;
    const links=req.body.links;
    const contacts=req.body.contacts
    const profileID=req.body.profileID;
    const userID=req.body.userID

  const newProfileVideo = new profileVideoModel({
    _id: mongoose.Types.ObjectId(),
    profileID:profileID,
    userID:userID,
    videoTitle:videoTitle,
    videoUrl:videoUrl,
    description:description,
    hashTags:hashTags,
    pdfUrl:pdfUrl,
    uploadImage:uploadImage,
    links:links,
    contacts:contacts
  });

  newProfileVideo.save(function (err, result) {
    if (!err) {
        res.json(result)
        profileModel.findOne({_id:profileID,userID:userID},(err,data)=>{
          if(!err){
          var arr=[];
          arr=data.video
          arr.push(result._id);
          profileModel.updateOne({_id:profileID,userID:userID},{video:arr},(err,data)=>{
            console.log(data);
        })}
        })
        



    }
    else{
        res.json(err)
    }
  })
}

exports.deleteProfileVideo = (req, res) => {
  const id = req.body.id;
  profileVideoModel.deleteOne({ _id: id }, (err, resp) => {
    if (!err) {
      res.json(resp);
    } else {
      res.json(err);
    }
  });
};

exports.putProfileVideo = (req, res) => {
    const id=req.body.id;
    const videoTitle=req.body.videoTitle;
    const videoUrl=req.body.videoUrl;
    const description=req.body.description;
    const hashTags=req.body.hashTags;
    const pdfUrl=req.body.pdfUrl;
    const uploadImage=req.body.uploadImage;
    const links=req.body.links;
    const contacts=req.body.contacts
    var hashTags1 = [];
    var links1 = [];
    var contacts1=[]

  profileVideoModel.findOne({ _id: id }, (err, data) => {
    console.log(data);
    hashTags1 = data.hashTags;
    contacts1 = data.contacts;
    
    links1 = data.links;

    links1.push(...links);
    hashTags1.push(...hashTags);
    contacts1.push(...contacts);
    
    update();
  });

  function update() {
    profileVideoModel.updateOne(
      { _id: id },{
        videoTitle:videoTitle,
        videoUrl:videoUrl,
        description:description,
        hashTags:hashTags1,
        pdfUrl:pdfUrl,
        uploadImage:uploadImage,
        links:links1,
        contacts:contacts1
      },{},(err, resp) => {
        if (!err) {
          
          res.json(resp);
        } else {
          res.json(err);
        }
      }
    );
  }
}
