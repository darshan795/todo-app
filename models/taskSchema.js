
const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
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
    enum:["pending","inprogress","completed"]
   },
   duedate:{
    type:String
   },
   duetime:{
    type:String,
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
