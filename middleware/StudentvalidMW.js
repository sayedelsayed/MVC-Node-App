const valiater= require('../utils/StudentValider');
module.exports=(req,res,nxt)=>{
    let valid=valiater(req.body)
    if(valid){req.valid=1;nxt();}
    else{res.status(403).send("forbidden command")} 
}