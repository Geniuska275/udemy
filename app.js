const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.set('view engine','ejs');

const port=2000


app.listen(port, ()=>{
    console.log("connected to database")
    console.log(`server listening to port  ${port}`);
    })

 app.get("/",(res,req)=>{
     res.render("udemy");
 })   