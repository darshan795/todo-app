
const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
    },
   title:{
    type:String,
    // required:true
   },
    description:{
    type:String,
    
   },
   status:{
    type:String,
    enum:["pending","inprogress","compeleted"]
   },
   duedate:{
    type:Date,
    default:Date.now

   },
   duetime:{
    type:Date,
   },
   priority:{
    type:String,
    enum:["High","Medium","Low"],
    default:"High",
   },
   category:{
    type:String,
    enum:["Work","personal","Urgent","Finance"]

   },
    
   assigned:{
    type:String,
    enum:["Me","Others"]
   },
   
  

})

const  Task=mongoose.model("task",taskSchema);
module.exports=Task;
