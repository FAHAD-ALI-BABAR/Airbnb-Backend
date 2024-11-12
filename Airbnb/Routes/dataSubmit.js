const express=require("express")
const dataSubmit=express.Router();
dataSubmit.post("/submit-detail",(req,res,next)=>{
    console.log(req.body);
    
     res.send(`<h1>Data has been submitted successfully</h1>
         <a href="/">Go to home page</a>
         </form>
         `)
 })
 module.exports=dataSubmit