const mongoose = require("mongoose");

const managePostsModel = require("../models/managePostsModels");
const profileModel = require("../models/ProfileModel");

exports.getPosts = (req, res) => {
  // id=req.body.id;
  managePostsModel.find({}, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
};

exports.postPost = (req, res) => {
  var obj = {};
  var id;
  const postTitle = req.body.postTitle;
  const videoUrl = req.body.videoUrl;
  const creators = req.body.creators;
  const hashTags = req.body.hashTags;
  const Type = req.body.Type;
  const recommendation = req.body.recommendation;
  const userID = req.body.userID;
  const profileID = req.body.profileID;

  const newPost = new managePostsModel({
    _id: mongoose.Types.ObjectId(),
    postTitle: postTitle,
    videoUrl: videoUrl,
    creators: creators,
    hashTags: hashTags,
    Type: Type,

    userID: userID,
    profileID: profileID,
  });

  newPost.save(function (err, result) {
    if (!err) {
        obj.resp = result;
        id=result._id;
      postID = [];
      console.log(id);
      profileModel.findOne({ _id: profileID, userID: userID }, (err, data) => {
        if (!err) {
          // console.log(data);
          postID = data.postID;
          console.log(postID);
          postID.push(id);

          profileModel.updateOne({ _id: profileID, userID: userID },{ postID: postID },(err, data) => {
              // console.log("added to profile");
             obj.postAddedToProfile=data;

              
              // res.json(result)
            }
          );
        }
      });
      setTimeout(() => {
        
          res.json(obj);
      }, 100);
    } else {
      res.json(err);
    }
  });
};

exports.deletePost = (req, res) => {
  const id = req.body.id;
  managePostsModel.deleteOne({ _id: id }, (err, resp) => {
    if (!err) {
      res.json(resp);
    } else {
      res.json(err);
    }
  });
};

exports.putPost = (req, res) => {
  const id = req.body.id;
  const postTitle = req.body.postTitle;
  const videoUrl = req.body.videoUrl;
  const creators = req.body.creators;
  var hashTags = req.body.hashTags;
  var hashTags1 = [];
  var creators1 = [];

  managePostsModel.findOne({ _id: id }, (err, data) => {
    hashTags1 = data.hashTags;
    console.log("first", hashTags1);
    creators1 = data.creators;
    creators1.push(...creators);
    hashTags1.push(...hashTags);
    console.log("2nd", hashTags1);
    update();
  });

  function update() {
    managePostsModel.updateOne(
      { _id: id },
      {
        postTitle: postTitle,
        videoUrl: videoUrl,
        creators: creators1,
        hashTags: hashTags1,
      },
      {},
      (err, resp) => {
        if (!err) {
          console.log("3rd", hashTags1);
          res.json(resp);
        } else {
          res.json(err);
        }
      }
    );
  }
};
