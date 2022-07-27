


const mongoose  = require("mongoose");
const recommendationModel = require("../models/recommendationModel");

const manageJobsModel = require("../models/manageJobsModel")
const managePostsModel = require("../models/managePostsModels")
const manageProjectsModel = require("../models/manageProjectsModel")
const manageQuestionModel = require("../models/manageQuestionsModel")



exports.postRecommendation=(req,res)=>{
    console.log("dafds");
    const userWhoRecommendID= req.body.userWhoRecommendID
    const userToWhomRecommendID=req.body.userToWhomRecommendID
    const profileID= req.body.profileID
    const data= req.body.data
    const pitchID=req.body.pitchID
    const Type=req.body.Type

    const newRecommendation = new recommendationModel({
        _id:mongoose.Types.ObjectId(),
        userToWhomRecommendID:userToWhomRecommendID,
        userWhoRecommendID:userWhoRecommendID,
        profileID:profileID,
        pitchID:pitchID,
        data:data,
        Type:Type
        
    })
    newRecommendation.save(function(err,result){
        if(!err){
            if(Type==="Job"){
                var recArr=[];
                var id=result._id;
                manageJobsModel.findOne({_id:pitchID},(err,data)=>{
                    console.log(data);
                    recArr=data.recommendation;
                    // console.log(id);
                    recArr.push(id);
                })
                setTimeout(() => {
                    
                    manageJobsModel.updateOne({_id:pitchID},{recommendation:recArr},(err,data)=>{
                        if(!err){
                        console.log(data);
                        }
                    })
             
                }, 100);
            }
            else if(Type==="Question"){
                var recArr=[];
                var id=result._id;
                manageQuestionModel.findOne({_id:pitchID},(err,data)=>{
                    recArr=data.recommendation;
                    recArr.push(id);
                })
            setTimeout(() => {
                manageQuestionModel.updateOne({_id:pitchID},{recommendation:recArr},(err,data)=>{
                    if(!err){
                    console.log(data);
                    }
                })
            }, 100);
            }
            else if(Type==="Post"){
                var recArr=[];
                var id=result._id;
                managePostsModel.findOne({_id:pitchID},(err,data)=>{
                    recArr=data.recommendation;
                    recArr.push(id);
                })
            setTimeout(() => {
                managePostsModel.updateOne({_id:pitchID},{recommendation:recArr},(err,data)=>{
                    if(!err){
                    console.log(data);
                    }
                })
            }, 100);
            }
            else if(Type==="Project"){
                var recArr=[];
                var id=result._id;
                manageProjectsModel.findOne({_id:pitchID},(err,data)=>{
                    recArr=data.recommendation;
                    recArr.push(id);
                })
             setTimeout(() => {
                manageProjectsModel.updateOne({_id:pitchID},{recommendation:recArr},(err,data)=>{
                    if(!err){
                    console.log(data);
                    }
                })
             }, 100);
            }
            res.json(result)
        }
        else{
            res.json(err);
        }
    });


}


