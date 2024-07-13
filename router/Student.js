const express=require('express');
const Router=express.Router();
//const validator=require('../middleware/StudentvalidMW');
const studentController=require('../controller/StudentController')

//get by id 
Router.get("/:id",studentController.getStudentsById)
  //get all Students 
  Router.get("/",studentController.getAllStudents)
//creat students
Router.post("/",studentController.addNewStudent)
 //updating student by id
Router.post("/:id",studentController.UpateStudentById)
    
   Router.delete("/:id",studentController.deletStudentById) /*
   // delete student
   (req,res)=>{
    let idx= Students.findIndex((val)=>{ 
    return val.id==req.params.id;
    })
    if (idx!=-1) 
    {
                let deletestd=Students.splice(idx,1);
                res.send(" ok i delet it");
    }
    else
        {
         res.send("sutdents not found to delet")
        }
    })
     
 */
module.exports=Router;