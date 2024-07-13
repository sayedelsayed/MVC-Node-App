
const student=require("../models/StudentModel");
//creat
let addNewStudent=(req,res)=>{
let std=  new student({
   fn:req.body.fn,
   ln:req.body.ln,
   dept:req.body.dept,
   id:req.body.id,
})
std.save().then(()=>res.status(200).send(std)).catch((err)=>{
for (let i in err.errors)
{
  console.log(err.errors[i].message);
  res.status(400).send("bad Request .. Some fileds are missed ")
}
})
}
//getyid
let getStudentsById= async(req,res)=>{
  try{let std=await student.findById(req.params.id);
    if(!std) return res.status(404).send("Student not found");
    res.send(std);}catch(err){
      for (let i in err.errors)
      {
        console.log(err.errors[i].message);
        res.status(400).send("bad Request .. Some fileds are missed ")
      }
      }
  
}
//getall

let getAllStudents= async(req,res)=>{
  try{let std=await student.find()
    if(!std) return res.status(404).send("Student not found");
    res.send(std);
    }catch(err){
      for (let i in err.errors)
      {
        console.log(err.errors[i].message);
        res.status(400).send("bad Request .. Some fileds are missed ")
      }
      }
  
    
  }


//update

let UpateStudentById= async(req,res)=>{
  try{let std=await student.findByIdAndUpdate(req.params.id,req.body,);
    if(!std) return res.status(404).send("Student not found");
    res.send(std);
    }catch(err){
      for (let i in err.errors)
      {
        console.log(err.errors[i].message);
        res.status(400).send("bad Request .. Some fileds are missed ")
      }
      }
  
  }
  

//delet

let deletStudentById= async(req,res)=>{
  try{  let std=await student.findByIdAndRemove(req.params.id);
    if(!std) return res.status(404).send("Student not found");
    res.send(std);
  }catch(err){
    for (let i in err.errors)
    {
      console.log(err.errors[i].message);
      res.status(400).send("bad Request .. Some fileds are missed ")
    }
    }

  }
module.exports={addNewStudent,getStudentsById,getAllStudents,UpateStudentById,deletStudentById};