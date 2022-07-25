const mongoose = require("mongoose");


// const savePitchModel = require("../models/savePitchModel");
const savePostModel = require("../models/savePostModel");
const saveProjectModel = require("../models/saveProjectModel");
const saveQuestionModel = require("../models/saveQuestionModel");
const saveJobModel = require("../models/saveJobModel");

    // var objPost={}
    // var objProject={}
    // var objJob={}
    // var objQuestion={}
  
exports.getSavedPitches=(req,res)=>{
    var obj={
       
    }
    var count =0;
    userID=req.body.userID
    function chk(){

  return new Promise((reso,rej)=>{
    savePostModel.find({userID:userID}).populate("pitchIDPost").exec((err,data)=>{
        if (!err) {
            savePostModel.countDocuments({userID:userID}).exec((err,data)=>{
                // console.log(data);
                count+=data;
            })
            obj.Posts=data;
        
             
            
        }
        else{
            res.json(err);
        }
    })
    saveProjectModel.find({userID:userID}).populate("pitchIDProject").exec((err,data)=>{
        if (!err) {
            
            obj.Projects=data;
            saveProjectModel.countDocuments({userID:userID}).exec((err,data)=>{
                count+=data;
            })

        }
        else{
            res.json(err);
        }
    })
    saveJobModel.find({userID:userID}).populate("pitchIDJob").exec((err,data)=>{
        if (!err) {
            
            obj.Job=data;
            saveJobModel.countDocuments({userID:userID}).exec((err,data)=>{
                count+=data;
            })
        }
        else{
            res.json(err);
        }
    })
    saveQuestionModel.find({userID:userID}).populate("pitchIDQuestion").exec((err,data)=>{
        if (!err) {
           
            obj.Question=data;
            saveQuestionModel.countDocuments({userID:userID}).exec((err,data)=>{
                count+=data;
            })
        }
        else{
            res.json(err);
        }
    })
  
  setTimeout(() => {
    obj.count=count;
      reso();
  }, 100);
    
   
  })
    
    
        
        // _callback();
    
}
async function second(){
    
   await chk();

    res.json(obj)
    // function sendRes(){
    //     res.json(obj);
    // }
}
second();

}   

exports.postPitchToSave = (req, res) => {
   const pitchID= req.body.pitchID;
   const userID=req.body.userID;
  
   const Type=req.body.Type;
   if(Type==="Project"){

    const newPitchToSave = new saveProjectModel({
        _id:mongoose.Types.ObjectId(),
         pitchIDProject:pitchID,
         userID:userID
       
        
    })
    newPitchToSave.save(function(err,result){
        if(!err){
            res.json(result)
        }
        else{
            res.json(err);
        }
    });
   }
   else if(Type==="Job"){
    console.log(userID);
    const newPitchToSave = new saveJobModel({
        _id:mongoose.Types.ObjectId(),
         pitchIDJob:pitchID,
         userID:userID
       
        
    })
    newPitchToSave.save(function(err,result){
        if(!err){
            res.json(result)
        }
        else{
            res.json(err);
        }
    });
   }
   else if(Type==="Post"){
    const newPitchToSave = new savePostModel({
        _id:mongoose.Types.ObjectId(),
         pitchIDPost:pitchID,
         userID:userID
       
        
    })
    newPitchToSave.save(function(err,result){
        if(!err){
            res.json(result)
        }
        else{
            res.json(err);
        }
    });
   }

   else if(Type==="Question"){
    const newPitchToSave = new saveQuestionModel({
        _id:mongoose.Types.ObjectId(),
         pitchIDQuestion:pitchID,
         userID:userID
       
        
    })
    newPitchToSave.save(function(err,result){
        if(!err){
            res.json(result)
        }
        else{
            res.json(err);
        }
    });
   }
   else{
    res.json("invalid Type")
   }

}

exports.deleteSavedPitch=(req,res)=>{
   const  id=req.body.id;
    manageJobsModel.deleteOne({_id:id},(err,resp)=>{
        if(!err){
            res.json(resp)
        }
        else{
            res.json(err);
        }
    })
}

// exports.putJob=(req,res)=>{
//     const id=req.body.id;
//     const jobTitle=req.body.jobTitle;
//     const companyName=req.body.companyName;
//     const videoUrl=req.body.videoUrl;
//     const jobDescription=req.body.jobDescription;
//     const hashTags=req.body.hashTags
//     const location=req.body.location
//     const salaryRange=req.body.salaryRange
//     const startDate=req.body.startDate
//     var hashTags1=[];

    
  
//         manageJobsModel.findOne({_id:id},  (err,data)=>{
        
//             hashTags1=data.hashTags
//             console.log("first",hashTags1);
            
            
//             hashTags1.push(...hashTags)
            
//             update();
            
//         });
    
   
//     function update(){
//         manageJobsModel.updateOne({_id:id},
//             {   jobTitle:jobTitle,
//                 companyName:companyName,
//                 videoUrl:videoUrl,
//                 jobDescription:jobDescription,
//                 hashTags:hashTags1,
//                 location:location,
//                 salaryRange:salaryRange,
//                 startDate:startDate},
//             {},(err,resp)=>{
//             if(!err){
//                 console.log("3rd",hashTags1);
//                 res.json(resp);
//             }
//             else{
//                 res.json(err);
//             }
//         })
//     }
// }
