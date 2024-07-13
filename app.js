const path= require('path');
const express=require('express');
const app=express();
//const { required } = require('joi');
const mongoose=require('mongoose');
const userRoute=require('./router/User');
//2)set connection
mongoose.connect('mongodb://localhost:27017/iti',{ useNewUrlParser: true ,
 useUnifiedTopology: true 
,useCreateIndex:true,
useFindAndModify:true
} )
.then(()=>{console.log("DataBase is Connecting")})
.catch((err)=>{console.log(err)})

const loggin=require("./middleware/login");
const StudentRouter=require('./router/Student');
//const  JOi=require('joi');
//const Ajv=require("ajv");
const port=process.env.port||3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(loggin);
app.use("/api/Student/",StudentRouter);
app.use("/api/user/",userRoute);

/*
//creat students
app.post("/api/Students",(req,res)=>{
 const valid = validate (req.body);
 
 
  if(valid){req.body.id=Students.length+1;
    Students.push(req.body);
    res.json(req.body);}
else{
  res.status(403).send(" forbidden command");
}

}  )

app.get("/",(req,res)=>{
    console.log("requst recieved.. ");
    //res.send(" ok seka");
    res.sendFile(path.join(__dirname,("main.html")))
});
/////////


app.get("/welcom.html",(req,res)=>{
  console.log(req.query.fnm)
  console.log(req.query.lnm)
  res.sendFile(path.join(__dirname,("welcom.html")))
});

*/



  app.listen(port,()=>{
      console.log("sayed listen !!!!!");
    })




