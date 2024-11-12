const path=require("path")
const express=require("express")
const dataSubmit=express.Router();
dataSubmit.post("/submit-detail",(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,"../","views","submit.html"))
     
 })
 module.exports=dataSubmit