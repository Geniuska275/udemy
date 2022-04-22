const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.set('view engine','ejs');
app.use(express.static("public"));

const port=process.env.PORT || 2000;

app.get("/",(req,res)=>{
    res.render("udemy");
})   
app.listen(port, ()=>{
    console.log("connected to database")
    console.log(`server listening to port  ${port}`);
    })
