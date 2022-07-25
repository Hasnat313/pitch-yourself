


const profileModel = require("../models/ProfileModel");





exports.getAllProfileAllPitches=(req,res)=>{
    



    profileModel.find().
    populate([{path:'postID',select:"videoUrl"},{path:'projectID'},'questionID','jobID']).
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


