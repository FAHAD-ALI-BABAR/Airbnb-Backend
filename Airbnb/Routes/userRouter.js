const path=require("path")
const express=require("express")
const userRouter=express.Router();
const rootDirectory=require("../utils/pathutils")

userRouter.get("/",(req,res,next)=>{
    
    // res.sendFile(path.join(__dirname,"../","views","home.html"))
    res.sendFile(path.join(rootDirectory,"views","home.html"))

})
module.exports=userRouter