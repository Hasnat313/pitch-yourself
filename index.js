const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
var cors = require('cors');
const http = require("http")
const path= require("path");
const socketio = require("socket.io");

const app = express();


// const publicDirectoryPath=path.join(__dirname,"../public")

// app.use(express.static(publicDirectoryPath))


app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
mongoose.connect("mongodb://127.0.0.1:27017/PitchYourSelf")
// mongoose.connect("mongodb+srv://hasnat100:123hasnat@cluster0.pslss.mongodb.net/PitchYourself")

app.use("/userSignup", require("./routes/userSignupRoutes"))
app.use("/userLogin", require("./routes/userLoginRoutes"))
app.use("/checkLogin", require("./routes/userCheckLoginRoutes"))
app.use("/userLogout", require("./routes/userLogoutRoutes"))
app.use("/adminLogin", require("./routes/adminLoginRoutes"))
app.use("/helpQueries", require("./routes/helpQueriesRoutes"))
app.use("/profile", require("./routes/profileRoutes"))
app.use("/manageQuestion", require("./routes/manageQuestionRoutes"))
app.use("/adminLogout", require("./routes/adminLogoutRoutes"))
app.use("/managePost", require("./routes/managePostsRoutes"))
app.use("/manageJob", require("./routes/manageJobsRoutes"))
app.use("/saveItem", require("./routes/savePitchRoutes"))
app.use("/manageProject", require("./routes/manageProjectRoutes"))
app.use("/home", require("./routes/homeRoute"))
app.use("/recommendation", require("./routes/recommendationRoutes"))
app.use("/profileVideo", require("./routes/profileVideoRoutes"))
app.use("/document", require("./routes/docRoutes"))






























app.listen(3000, function () {
    console.log("server started on port 3000")
})