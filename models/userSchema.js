const { required } = require("joi");
const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose").default;


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
    
    }
    
  

})

userSchema.plugin(passportLocalMongoose);

const User=mongoose.model("user",userSchema);
module.exports=User;
