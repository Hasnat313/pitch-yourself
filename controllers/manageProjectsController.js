const mongoose = require("mongoose");


const manageProjectsModel = require("../models/manageProjectsModel");

const profileModel = require("../models/ProfileModel");



exports.getProjects=(req,res)=>{
    // id=req.body.id;
    manageProjectsModel.find({},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
}

exports.postProject = async (req, res) => {
    var id;
    var obj={};
    const projectTitle=req.body.projectTitle;
    const videoUrl=req.body.videoUrl;
    const description=req.body.description;
    const hashTags=req.body.hashTags
    const people=req.body.people;
    const Type=req.body.Type;
    const userID=req.body.userID;
    const profileID=req.body.profileID;
 

    const newProject = new manageProjectsModel({
        _id:mongoose.Types.ObjectId(),
        projectTitle:projectTitle,
        videoUrl:videoUrl,
        people:people,
        description:description,
        hashTags:hashTags,
        people:people,
        Type:Type,
        userID:userID,
        profileID:profileID,

    })
    newProject.save(function(err,result){
        if(!err){
            obj.resp = result;
            id=result._id;
          projectID = [];
          console.log(id);
          profileModel.findOne({ _id: profileID, userID: userID }, (err, data) => {
            if (!err) {
              // console.log(data);
              projectID = data.projectID;
              console.log(projectID);
              projectID.push(id);
    
              profileModel.updateOne({ _id: profileID, userID: userID },{ projectID: projectID },(err, data) => {
                  // console.log("added to profile");
                 obj.projectAddedToProfile=data;
    
                  
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

exports.deleteProject=(req,res)=>{
   const  id=req.body.projectID;
    manageProjectsModel.deleteOne({_id:id},(err,resp)=>{
        if(!err){
          res.json(resp);
        }
        else{
            res.json(err);
        }
    })
}

exports.putProject=(req,res)=>{
    const projectTitle=req.body.projectTitle;
    const videoUrl=req.body.videoUrl;
    const description=req.body.description;
    const hashTags=req.body.hashTags
    const people=req.body.people;
    const id=req.body.projectID
    var hashTags1=[];
    var people1=[]
    
  
        manageProjectsModel.findOne({_id:id},  (err,data)=>{
            console.log(data);
            hashTags1=data.hashTags
            console.log("first",hashTags1);
            people1=data.people;
            people1.push(...people);
            hashTags1.push(...hashTags)
            console.log("2nd",hashTags1);
            update();
            
        });
    
   
    function update(){
        manageProjectsModel.updateOne({_id:id},
            {   projectTitle:projectTitle,
                videoUrl:videoUrl,
                people:people,
                description:description,
                hashTags:hashTags1,
                people:people1},
            {},(err,resp)=>{
            if(!err){
                
                res.json(resp);
            }
            else{
                res.json(err);
            }
        })
    }
}
