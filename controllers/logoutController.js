

exports.getLogout=(req,res)=>{
    if(req.session.userid){
        res.json("Good bye")
        req.session.destroy();}
        else{
        res.redirect('/');
        }
}