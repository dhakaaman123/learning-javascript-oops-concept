const express = require("express");
const app = express();
const port  =8080;

app.get("/register",(req,res)=>{
    let {user ,Password}=req.query;
    res.send(`standard GET response and welcome  ${user}`);

});
app.post("/register",(req,res)=>{
    res.send("Standard Post respose");
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});
