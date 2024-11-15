const path=require("path")
const express=require("express")
const userRouter=express.Router();
const rootDirectory=require("../utils/pathutils");
const { registeredHomes } = require("./dataSubmit");

userRouter.get("/",(req,res,next)=>{
    console.log(registeredHomes);
    res.render("home",{registeredHomes:registeredHomes})
    
    // res.sendFile(path.join(__dirname,"../","views","home.html"))
    // res.sendFile(path.join(rootDirectory,"views","home.html"))
    

})
module.exports=userRouter