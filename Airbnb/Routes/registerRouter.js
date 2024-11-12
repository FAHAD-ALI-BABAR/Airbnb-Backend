const path=require("path")
const express=require("express")
const registerRouter=express.Router();
registerRouter.get("/register",(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,"../","views","Register.html"))
})
module.exports=registerRouter