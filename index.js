const express= require("express");
const app= express();


require('dotenv').config()
const port =process.env.PORT;
//console.log(process.env)
app.get("/",(req,res)=>{
    res.send("Hello GV")
})

app.get('/login',(req,res)=>{
    res.send(`login to go in`)
})

app.get('/git',(req,res)=>{
    res.send(`This is git page`)
})

app.get('/leetcode',(req,res)=>{
    res.send(`This is leetcode page`)
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})