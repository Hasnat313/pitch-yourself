const mongoose = require("mongoose");


const managePostsModel = require("../models/managePostsModels");





exports.getPosts=(req,res)=>{
    // id=req.body.id;
    managePostsModel.find({},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
}

exports.postPost = async (req, res) => {
    const postTitle=req.body.postTitle;
    const videoUrl=req.body.videoUrl;
    const creators=req.body.creators;
    const hashTags=req.body.hashTags;
    const Type=req.body.Type;
    const recommendation=req.body.recommendation;
 

    const newPost = new managePostsModel({
        _id:mongoose.Types.ObjectId(),
        postTitle:postTitle,
        videoUrl:videoUrl,
        creators:creators,
        hashTags:hashTags,
        Type:Type,
        recommendation:recommendation
        
    })
    newPost.save(function(err,result){
        if(!err){
            res.json(result)
        }
        else{
            res.json(err);
        }
    });

}

exports.deletePost=(req,res)=>{
   const  id=req.body.id;
    managePostsModel.deleteOne({_id:id},(err,resp)=>{
        if(!err){
            res.json(resp)
        }
        else{
            res.json(err);
        }
    })
}

exports.putPost=(req,res)=>{
    const id=req.body.id;
    const postTitle=req.body.postTitle;
    const videoUrl=req.body.videoUrl;
    const creators=req.body.creators;
    var hashTags=req.body.hashTags
    var hashTags1=[];
    var creators1=[]
    
  
        managePostsModel.findOne({_id:id},  (err,data)=>{
        
            hashTags1=data.hashTags
            console.log("first",hashTags1);
            creators1=data.creators;
            creators1.push(...creators);
            hashTags1.push(...hashTags)
            console.log("2nd",hashTags1);
            update();
            
        });
    
   
    function update(){
        managePostsModel.updateOne({_id:id},
            {postTitle:postTitle,videoUrl:videoUrl,creators:creators1,hashTags:hashTags1},
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
