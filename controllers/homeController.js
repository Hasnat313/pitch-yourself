


const profileModel = require("../models/ProfileModel");





exports.getAllProfileAllPitches=(req,res)=>{
    



    profileModel.find().
    populate([{path:'postID',populate:{path:'recommendation'}},
    {path:'projectID',populate:{path:'recommendation'}},
    {path:'questionID',populate:{path:'recommendation'}},
    {path:'jobID',populate:{path:'recommendation'}}]).
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

exports.getRecommendation=(req,res)=>{
    profileModel.find({},['postID','jobID','projectID','questionID']).
    populate([{path:'postID',select:"recommendation",populate:{path:'recommendation',select:'data'}},
    {path:'questionID',select:"recommendation",populate:{path:'recommendation',select:'data'}},
    {path:'projectID',select:"recommendation",populate:{path:'recommendation',select:'data'}},
    {path:'jobID',select:"recommendation",populate:{path:'recommendation',select:'data'}}

])
    .exec((err,data)=>{
        res.json(data);
    })
}

