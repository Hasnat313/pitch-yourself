const mongoose = require("mongoose");


const manageJobsModel = require("../models/manageJobsModel");

const profileModel = require("../models/ProfileModel");



exports.getJobs=(req,res)=>{
    id=req.body.userID;
    manageJobsModel.find({},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
}

exports.postJob = (req, res) => {
    var id;
    var obj={};
    const jobTitle=req.body.jobTitle;
    const companyName=req.body.companyName;
    const videoUrl=req.body.videoUrl;
    const jobDescription=req.body.jobDescription;
    const hashTags=req.body.hashTags
    const location=req.body.location
    const salaryRange=req.body.salaryRange
    const startDate=req.body.startDate
    const Type=req.body.Type;
    const userID=req.body.userID;
    const profileID=req.body.profileID;
 

    const newJob = new manageJobsModel({
        _id:mongoose.Types.ObjectId(),
         jobTitle:jobTitle,
         companyName:companyName,
         videoUrl:videoUrl,
         jobDescription:jobDescription,
         hashTags:hashTags,
         location:location,
         salaryRange:salaryRange,
         startDate:startDate,
         Type:Type,
         userID:userID,
         profileID:profileID
         
     
        
    })
    newJob.save(function(err,result){
        if(!err){
            obj.resp = result;
            id=result._id;
          jobID = [];
          console.log(id);
          profileModel.findOne({ _id: profileID, userID: userID }, (err, data) => {
            if (!err) {
              // console.log(data);
              jobID = data.jobID;
              console.log(jobID);
              jobID.push(id);
    
              profileModel.updateOne({ _id: profileID, userID: userID },{ jobID: jobID },(err, data) => {
                  // console.log("added to profile");
                 obj.jobAddedToProfile=data;
    
                  
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

exports.deleteJob=(req,res)=>{
   const  id=req.body.jobID;
    manageJobsModel.deleteOne({_id:id},(err,resp)=>{
        if(!err){
            res.json(resp)
        }
        else{
            res.json(err);
        }
    })
}

exports.putJob=(req,res)=>{
    const id=req.body.jobID;
    const jobTitle=req.body.jobTitle;
    const companyName=req.body.companyName;
    const videoUrl=req.body.videoUrl;
    const jobDescription=req.body.jobDescription;
    const hashTags=req.body.hashTags
    const location=req.body.location
    const salaryRange=req.body.salaryRange
    const startDate=req.body.startDate
    var hashTags1=[];

    
  
        manageJobsModel.findOne({_id:id},  (err,data)=>{
        
            hashTags1=data.hashTags
            console.log("first",hashTags1);
            
            
            hashTags1.push(...hashTags)
            
            update();
            
        });
    
   
    function update(){
        manageJobsModel.updateOne({_id:id},
            {   jobTitle:jobTitle,
                companyName:companyName,
                videoUrl:videoUrl,
                jobDescription:jobDescription,
                hashTags:hashTags1,
                location:location,
                salaryRange:salaryRange,
                startDate:startDate},
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
