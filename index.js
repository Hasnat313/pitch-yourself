const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();
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

app.use("/userSignup", require("./routes/userSignupRoutes"))
app.use("/userLogin", require("./routes/userLoginRoutes"))
app.use("/", require("./routes/userCheckLoginRoutes"))
app.use("/userLogout", require("./routes/userLogoutRoutes"))
app.use("/adminLogin", require("./routes/adminLoginRoutes"))
app.use("/helpQueries", require("./routes/helpQueriesRoutes"))

app.listen(3000, function () {
    console.log("server started on port 3000")
})