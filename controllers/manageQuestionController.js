const mongoose = require("mongoose");


const manageQuestionsModel = require("../models/manageQuestionsModel");





exports.getQuestion=(req,res)=>{
    // id=req.body.id;
    manageQuestionsModel.find({},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
}

exports.postQuestion = async (req, res) => {
    const questionTitle=req.body.questionTitle;
    const videoUrl=req.body.videoUrl;
    const questionReason=req.body.questionReason;
    const hashTags=req.body.hashTags
    const Type=req.body.Type;

 

    const newQuestion = new manageQuestionsModel({
        _id:mongoose.Types.ObjectId(),
        questionTitle:questionTitle,
        videoUrl:videoUrl,
        questionReason:questionReason,
        hashTags:hashTags,
        Type:Type
        
    })
    newQuestion.save(function(err,result){
        if(!err){
            res.json(result)
        }
        else{
            res.json(err);
        }
    });

}

exports.deleteQuestion=(req,res)=>{
   const  id=req.body.id;
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
    const id=req.body.id;
    const questionTitle=req.body.questionTitle;
    const videoUrl=req.body.videoUrl;
    const questionReason=req.body.questionReason;
    var hashTags=req.body.hashTags
    var hashTags1=[];
    
  
        manageQuestionsModel.findOne({_id:id},  (err,data)=>{
        
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
