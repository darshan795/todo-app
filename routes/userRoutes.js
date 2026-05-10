const express=require("express");
const router=express.Router();
const User=require("../models/userSchema");
const Task=require("../models/taskSchema");
const ExpressError=require("../utils/ExpressError");
const WrapAsync=require("../utils/WrapAsync");

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
router.post("/login",(req,res)=>{
    //now this part  we will be using to log in  the user
    
})



module.exports=router;

