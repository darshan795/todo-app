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
const session=require("express-session");
    
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

app.use(session({
    secret:"mysupersecretkeyforcookieprotection",
    resave:false,
    saveUninitialized:false,
    name:"sessionId",
    cookie:{
        maxAge:1000*60*60*24,
        httpOnly:true,
        secure:false//it  is  used in the   http part  for the  development
        //true it  will be used for the implementation of the  production site that is will only be sent through the https
        

    }

}))
//let use the fake  database scene to understand  authentication and  authorization
let user={
    username:"Darshan",
    password:1234,
    role:"admin"
}
app.get("/checklogin",(req,res)=>{
    // console.log("for checking the login credentials ");
    let user1="Darshan"   
    try{
    if(user.username==user1){
        console.log("user found.");
        req.session.user=user;

       return res.send("user  authenticated!!")
    }
}catch(err){
    console.log("there is the  fucking problem!!!")
    console.log(err);
}
    res.send("user not authenticated!!!");
})

app.use("/todo",taskRoutes);
app.get("/testing",(req,res)=>{
    console.log(req.session);
    console.log(req.session.user);
    if(!req.session.user){
        return res.send("failed to login first  login ")
    }
    res.json(req.session);
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
