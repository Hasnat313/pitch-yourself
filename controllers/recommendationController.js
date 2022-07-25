


const { default: mongoose } = require("mongoose");
const recommendationModel = require("../models/recommendationModel");





exports.postRecommendation=(req,res)=>{
    console.log("dafds");
    const userWhoRecommendID= req.body.userWhoRecommendID
    const userToWhomRecommendID=req.body.userToWhomRecommendID
    const profileID= req.body.profileID
    const data= req.body.data
    const pitchID=req.body.pitchID

    const newRecommendation = new recommendationModel({
        _id:mongoose.Types.ObjectId(),
        userToWhomRecommendID:userToWhomRecommendID,
        userWhoRecommendID:userWhoRecommendID,
        profileID:profileID,
        pitchID:pitchID,
        data:data
        
    })
    newRecommendation.save(function(err,result){
        if(!err){
         
            res.json(result)
        }
        else{
            res.json(err);
        }
    });


}


