const express=require('express');
const router=express.Router();
//const uservalidator=require('../middleware/userMw');
const User=require("../models/UserModel")
const bcrypt = require ('bcrypt')
//Registration
router.post("/",async(req,res)=>{
    let user = await User.findOne({email:req.body.email}).exec();
//create new user to add to db
if(user)
return res.status(400).send("user is already ok");
let salt=await bcrypt.genSalt(10);
let hashpswrd= await bcrypt.hash(req.body.password,salt);
user =new User({
    email:req.body.email,
    name:req.body.name,
    password:hashpswrd,
})
await user.save();
res.status(200).send({nmae:user.name, email:user.email})
    

})
module.exports=router;