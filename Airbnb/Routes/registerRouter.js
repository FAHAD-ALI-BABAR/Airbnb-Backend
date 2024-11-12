const express=require("express")
const registerRouter=express.Router();
registerRouter.get("/register",(req,res,next)=>{
    
    res.send(`<form action="/submit-detail" method="POST">
        <input type="text" name="text" placeholder="Enter your name"/>
        <input type="submit" value="submit"/>
        </form>
        `)
})
module.exports=registerRouter