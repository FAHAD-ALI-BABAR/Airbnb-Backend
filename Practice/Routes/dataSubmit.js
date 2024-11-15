const path=require("path")
const express=require("express")
const dataSubmit=express.Router();
const rootDirectory=require("../utils/pathutils")
const registeredHomes=[];
dataSubmit.post("/submit-detail",(req,res,next)=>{
    registeredHomes.push(req.body)
    // res.sendFile(path.join(__dirname,"../","views","submit.html"))
    res.sendFile(path.join(rootDirectory,"views","submit.html"))

     
 })
 
 
 exports.dataSubmit=dataSubmit
 exports.registeredHomes=registeredHomes
