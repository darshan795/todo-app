function isLoggedIn(req,res,next){
    if(!req.isAuthenticated()){
        console.log("you are logged in")
        return res.send("you have to be logged in!!")

    }
    console.log("you are successfully logged in motherfucker!!");
    next();

}

module.exports=isLoggedIn;