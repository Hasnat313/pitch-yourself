const mongoose = require("mongoose");


const manageProjectsModel = require("../models/manageProjectsModel");





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
    const projectTitle=req.body.projectTitle;
    const videoUrl=req.body.videoUrl;
    const description=req.body.description;
    const hashTags=req.body.hashTags
    const people=req.body.people;
    const Type=req.body.Type;
 

    const newProject = new manageProjectsModel({
        _id:mongoose.Types.ObjectId(),
        projectTitle:projectTitle,
        videoUrl:videoUrl,
        people:people,
        description:description,
        hashTags:hashTags,
        people:people,
        Type:Type        
    })
    newProject.save(function(err,result){
        if(!err){
            res.json(result)
        }
        else{
            res.json(err);
        }
    });

}

exports.deleteProject=(req,res)=>{
   const  id=req.body.id;
    manageProjectsModel.deleteOne({_id:id},(err,resp)=>{
        if(!err){
            res.json(resp)
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
 
    var hashTags1=[];
    var people1=[]
    
  
        manageProjectsModel.findOne({_id:id},  (err,data)=>{
        
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
