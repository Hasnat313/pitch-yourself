
const mongoose = require("mongoose");
const savePitchesSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    pitchIDProjects:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Projects',
        // ref:'profile',
        // ref:'Jobs',
        // ref:'Questions'
},
    pitchIDPosts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Posts',
    },
    pitchIDJobs:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Jobs',
    },
    pitchIDQuestions:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Questions',
    },

    Type:String,
  
})

const savePitchModel=mongoose.model("savedItems",savePitchesSchema,"savedItems");
module.exports=savePitchModel;