
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
    type:Boolean
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
   notify:{
    type:Date,

   },
   assigned:{
    type:String,
    enum:["Me","Others"]
   },
   
  

})

const  Task=mongoose.model("task",taskSchema);
module.exports=Task;
