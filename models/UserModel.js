// const { isValid } = require('ipaddr.js');
//const { required, valid } = require('joi');
const mongoose =require('mongoose');
//const { message } = require('statuses');
const valiater=require('validator')
 const userSchema=new mongoose.Schema({
    name:{type:String,required:true}
    ,email:{type:String,required:true,validate:{ validator:(val)=>{return valid.isEmail(val);}
,message:"{Value} is not valid email"}}
    ,password:{type:String,required:true,}

 });

 exports.User=mongoose.model("User",userSchema);