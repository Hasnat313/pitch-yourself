
const mongoose = require("mongoose");
const documentSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    docUrl:String,
    private:Boolean,
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    profileID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
 
})

const documentModel=mongoose.model("documents",documentSchema,"documents");
module.exports=documentModel;