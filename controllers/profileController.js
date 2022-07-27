
const mongoose = require("mongoose");

const profileModel = require("../models/ProfileModel");






exports.getProfile=(req,res)=>{
    
    const id=req.params.id;
    profileModel.find({userID:id}).
    populate(['postID','projectID','questionID','jobID']).
    // populate('questionID').
    // populate('jobID').
    // poulate('projectID').
    exec((err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    })
}

exports.getAllProfile=(req,res)=>{
    



    profileModel.find().
    populate(['spostID','projectID','questionID','jobID']).
    // poulate('projectID').
    exec((err,data)=>{
        if(!err){
            res.json(data);
        }
        else{
            res.json(err);
        }
    })
}



exports.postCompleteProfile=async (req,res)=>{

    // _id=mongoose.Types.ObjectId(),
    const photoUrl=req.body.photoUrl
    const userID=req.body.userID;
    const name=req.body.name
    const proffesion=req.body.proffesion
    const bio=req.body.bio;
    const totalPosts=req.body.totalPosts;
    const hashTags=req.body.hashTags
    const description=req.body.description;
    const socialLinks=req.body.socialLinks;
    const videoUrl=req.body.videoUrl;
    
    const emailAddress=req.body.emailAddress;
   

    
    const newprofile = new profileModel({
        _id:mongoose.Types.ObjectId(),
        userID:userID,
        photoUrl:photoUrl,
        name:name,
        proffesion:proffesion,
        bio:bio,
        totalPosts:totalPosts,
        hashTags:hashTags,
        description:description,
        socialLinks:socialLinks,
        videoUrl:videoUrl,
        
        emailAddress:emailAddress,
 
        
        
    })
    newprofile.save(function(err,result){
        if(!err){
            res.json(result)
        }
        else{
            res.json(err);
        }
    });

}
// exports.deleteUserDiamonds=(req,res)=>{
//     const userId = req.body.userId;
//         userDiamondsModel.deleteOne({
//             userId: userId
//         }, (err,result)=>{
//             if(err){
//                 res.json(err)
//             }
//             else{
//                 res.json(result);
//             }
//         })
    
// }

exports.putUpdateProfile=(req,res)=>{
    const id = req.body.id;
    
    const photoUrl=req.body.photoUrl
    const name=req.body.name
    const proffesion=req.body.proffesion
    const bio=req.body.bio;
    const totalPosts=req.body.totalPosts;
    const hashTags=req.body.hashTags
    const description=req.body.description;
    const socialLinks=req.body.socialLinks;
    const videoUrl=req.body.videoUrl;
    
        
        profileModel.updateOne({
            _id:id
        }, {
            photoUrl:photoUrl,
            name:name,
            proffesion:proffesion,
            bio:bio,
            totalPosts:totalPosts,
            hashTags:hashTags,
            description:description,
            socialLinks:socialLinks,
            videoUrl:videoUrl,
            
            
        }, {
            // upsert: true
        }, function (err, foundResult) {
            try {
                res.json(foundResult)
            } catch (err) {
                res.send(err)
            }
        })

}

// exports.putAddPitches=(req,res)=>{
//     const id = req.body.id;
    
//     const postID=req.body.postID

//     managePostsModel.findOne({_id:postID},(err,data)=>{
//         if(!err){
//             profileModel.find
//         }
//     })
//     const jobID=req.body.jobID
//     const projectID=req.body.projectID
//     const questionID=req.body.questionID
        
//         profileModel.updateOne({
//             _id:id
//         }, {
//             postID:postID,
//             jobID:jobID,
//             questionID:questionID,
//             projectID:projectID
    
            
//         }, {
//             // upsert: true
//         }, function (err, foundResult) {
//             try {
//                 res.json(foundResult)
//             } catch (err) {
//                 res.send(err)
//             }
//         })

// }
