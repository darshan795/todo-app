const { required } = require("joi");
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,

    },
    occupation:{
        type:String,
        required:true,
        enum:["student","developer","teacher","employee"],


    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

const User=mongoose.model("user",userSchema);
module.exports=User;
