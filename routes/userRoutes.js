const express=require("express");
const router=express.Router();
const User=require("../models/userSchema");
const Task=require("../models/taskSchema");
const ExpressError=require("../utils/ExpressError");
const WrapAsync=require("../utils/WrapAsync");
const passport=require("passport");
const isLoggedIn=require("../middleware");
router.get("/signup",(req,res)=>{
    res.render("signup.ejs");

})

router.post("/signup",async (req,res,next)=>{
    try{
     const {email,username,password}=req.body;
     
     const newUser=new User({email,username});
    let registeredUser= await User.register(newUser,password);
    console.log("successfully registered the new user")
    
     res.redirect("login");
    }catch(err){
        console.log("hey this is the err");
        res.redirect("/signup");
    }
     
   

})
router.get("/login",(req,res)=>{
    res.render("login.ejs");
})
router.post("/login",passport.authenticate("local",{
    failureRedirect:"/login",
    successRedirect:"/todo/main"
}))

router.get("/logout",isLoggedIn,(req,res)=>{
    req.logout((err)=>{
        if(err){
            console.log("failed to logout");
            return next(err);
        }
        return res.redirect("/login");

    })
})

module.exports=router;

