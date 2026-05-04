const express=require("express");
const app=express();
const path=require("path");
const   mongoose=require("mongoose");
const User=require("./models/userSchema");
const data=require("./data/dummy");
const Task=require("./models/taskSchema");
const methodOverride=require("method-override");
const ExpressError=require("./utils/ExpressError");
const WrapAsync=require("./utils/WrapAsync");
const taskRoutes=require("./routes/taskRoutes");
    
const connectDb=async ()=>{
        await mongoose.connect('mongodb://127.0.0.1:27017/todo');
    }
connectDb().then(()=>{
        console.log("db connected successfully");
 }).catch((err)=>{
        console.log("failed to  connect with the db",err);
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use((req,res,next)=>{
        console.log("this is the first middleware");
        next();

    })
app.use("/todo",taskRoutes);
app.get("/testing",(req,res,next)=>{
        console.log("hey this is  new thing");
        next( new ExpressError());

    })
app.get("/testing1",(req,res,next)=>{
        throw new ExpressError(420,"not  fucking  much")
    })
app.get("/testing2",(req,res,next)=>{
    next(new ExpressError(400,"hey this is a  failure  testing!!"))
    })
app.use((err,req,res,next)=>{
        console.log("error handling  middleware is coming motherfucker");
        res.status(err.status || 404).send(err.message || "nothing is  fucked..")
    })
app.get("/",(req,res)=>{
        res.render("pratice.ejs");
    })

app.listen(3000,()=>{
        console.log("server is listening on the port number   3000");

})
