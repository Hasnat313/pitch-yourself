const mongoose = require("mongoose");


const manageQuestionsModel = require("../models/manageQuestionsModel");
const profileModel = require("../models/ProfileModel");





exports.getQuestion=(req,res)=>{
    userID=req.body.userID;
    manageQuestionsModel.find({userID:userID},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
}

exports.postQuestion = async (req, res) => {
    var id;
    var obj={};
    const questionTitle=req.body.questionTitle;
    const videoUrl=req.body.videoUrl;
    const questionReason=req.body.questionReason;
    const hashTags=req.body.hashTags
    const Type=req.body.Type;
    const userID=req.body.userID;
    const profileID=req.body.profileID;

 

    const newQuestion = new manageQuestionsModel({
        _id:mongoose.Types.ObjectId(),
        questionTitle:questionTitle,
        videoUrl:videoUrl,
        questionReason:questionReason,
        hashTags:hashTags,
        Type:Type,
        userID:userID,
        profileID:profileID
        
    })
    newQuestion.save(function(err,result){
        if(!err){
            obj.resp = result;
            id=result._id;
          questionID = [];
          console.log(id);
          profileModel.findOne({ _id: profileID, userID: userID }, (err, data) => {
            if (!err) {
              // console.log(data);
              questionID = data.questionID;
              console.log(questionID);
              questionID.push(id);
    
              profileModel.updateOne({ _id: profileID, userID: userID },{ questionID: questionID },(err, data) => {
                  // console.log("added to profile");
                 obj.questionAddedToProfile=data;
    
                  
                  // res.json(result)
                }
              );
            }
          });
          setTimeout(() => {
            
              res.json(obj);
          }, 100);
        }
        else{
            res.json(err);
        }
    });

}

exports.deleteQuestion=(req,res)=>{
   const  id=req.body.questionID;
    manageQuestionsModel.deleteOne({_id:id},(err,resp)=>{
        if(!err){
            res.json(resp)
        }
        else{
            res.json(err);
        }
    })
}

exports.putQuestion=(req,res)=>{
    const id=req.body.questionID;
    const questionTitle=req.body.questionTitle;
    const videoUrl=req.body.videoUrl;
    const questionReason=req.body.questionReason;
    var hashTags=req.body.hashTags
    var hashTags1=[];
    
  
        manageQuestionsModel.findOne({_id:id},  (err,data)=>{
            console.log(data);
            hashTags1=data.hashTags
            console.log("first",hashTags1);
            
            
            hashTags1.push(...hashTags)
            console.log("2nd",hashTags1);
            update();
            
        });
    
   
    function update(){
        manageQuestionsModel.updateOne({_id:id},
            {questionTitle:questionTitle,videoUrl:videoUrl,questionReason:questionReason,hashTags:hashTags1},
            {},(err,resp)=>{
            if(!err){
                console.log("3rd",hashTags1);
                res.json(resp);
            }
            else{
                res.json(err);
            }
        })
    }
}
