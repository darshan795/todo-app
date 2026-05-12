const express=require("express");
const  router=express.Router();
const User=require("../models/userSchema");
const Task=require("../models/taskSchema");
const mongoose=require("mongoose");
const ExpressError=require("../utils/ExpressError");
const WrapAsync=require("../utils/WrapAsync");
const isLoggedIn=require("../middleware");

router.get("/",(req,res)=>{
    res.send("welcome to the implementation of the  routers  motherfucker!!!");
})

router.get("/add",isLoggedIn,(req,res)=>{
    res.render("add.ejs")
})
router.post("/add",   WrapAsync(async (req,res)=>{
    let data=req.body;
    const newData={
        userid:new mongoose.Types.ObjectId("69d5246752afdc4fd859b064"),
        ...data
    };
    console.log(newData);
    if(!data.title){
        throw new ExpressError(500,"failed tgito  insert the data into the databae")
    }
    
    let result=new Task(newData);
    await result.save();

    
    console.log("error while pushing the code to servers",err);
    

     
    res.json({message:"successfully sent the data..."});
}))
router.get("/read",async (req,res)=>{
    
    try{
        let result=await Task.find();
        console.log(result);
        console.log("read the data  successfully");
        res.json(result);
    }catch(err){
        console.log("failed to fetch the data",err);
    }

})
router.delete("/delete/:id",async(req,res)=>{
    console.log("delete req is coming from the browser");
    let {id}=req.params;
    try{
    let  result=await Task.findOneAndDelete({userid:id});
    console.log("the result is coming in the form of",result);
    console.log("successfully deleted the   item")
    }catch(err){
        console.log("failed to fetch the data from the id",err);
    }

    console.log(id);
    res.json({message:"hey delete  request executed successfully"});
})
router.put("/update/:id", async (req,res)=>{
    let {id}=req.params;
    let data=req.body;
    let {title}=req.body;
    console.log("accessing the  update route")
    try{
    let result=await Task.findOneAndUpdate({userid:id},{
        title:title
    });
    console.log("the result  of that part",result);
    

    }catch(err){
        console.log("failed to fetch the data using that userid",err);
    }


    
   
    res.json({message:"welcome  for the new part"});
})


router.get("/main",isLoggedIn,(req,res)=>{
    res.render("main.ejs");

})
module.exports=router;
