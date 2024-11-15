const path=require("path")
const express=require("express")
const registerRouter=express.Router();
const rootDirectory=require("../utils/pathutils")
registerRouter.get("/register",(req,res,next)=>{
    
    // res.sendFile(path.join(__dirname,"../","views","Register.html"))
    res.sendFile(path.join(rootDirectory,"views","Register.html"))

})
module.exports=registerRouter