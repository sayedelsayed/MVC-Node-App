//1)require monggose
const mongoose=require('mongoose')
//3)
const studentSchema = new mongoose.Schema({
    fn:{type:String,required:true,minLength:3,maxLength:30, trim:true},
    ln:{type:String,required:true,minLength:3,maxLength:30, trim:true},
    dept:{type:String,required:true,default:"SD"},
    id:{type:Number,required:true,}
})
//3)
const Student=mongoose.model("Student",studentSchema); 
module.exports=Student;