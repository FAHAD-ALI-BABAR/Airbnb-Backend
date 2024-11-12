const express=require("express")
const userRouter=express.Router();
userRouter.get("/",(req,res,next)=>{
    
    res.send(`<h1>Welcome to My home page</h1>
        <a href="/register">Go to Register Page</a>
        `)
})
module.exports=userRouter;