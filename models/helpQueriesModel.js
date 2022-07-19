
const mongoose = require("mongoose");
const helpQueriesSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    data:String,
    userID:mongoose.Schema.Types.ObjectId,
})

const helpQueriesModel=mongoose.model("helpQueries",helpQueriesSchema,"helpQueries");
module.exports=helpQueriesModel;