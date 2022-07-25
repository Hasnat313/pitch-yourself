
const mongoose = require("mongoose");

const helpQueriesModel = require("../models/helpQueriesModel");





exports.getHelpQueries=(req,res)=>{
    
    
    helpQueriesModel.find({}).populate('profileID').exec((err,data)=>{
        if(!err){
            res.json(data);
        }
        else{
            res.json(err);
        }
    })
}

exports.getHelpQueriesByID=(req,res)=>{
    id=req.params.ID;
    // console.log(userID);
    helpQueriesModel.find({_id:id},{},(err,data)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
}

exports.postHelpQueries=async (req,res)=>{

   
    const data=req.body.data;
    const userID=req.body.userID;
    const profileID=req.body.profileID;

 

    const newHelpQuery = new helpQueriesModel({
        _id:mongoose.Types.ObjectId(),
        data:data,
        userID:userID,
        profileID:profileID
        
    })
    newHelpQuery.save(function(err,result){
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

// exports.putUserDiamonds=(req,res)=>{
//     const userId = req.body.userId;
    
//     const userDiamonds  =   req.body.userDiamonds;
        
//         userDiamondsModel.updateOne({
//             userId:userId
//         }, {
//             userDiamonds:userDiamonds
//         }, {
//             upsert: true
//         }, function (err, foundResult) {
//             try {
//                 res.json(foundResult)
//             } catch (err) {
//                 res.send(err)
//             }
//         })

// }
