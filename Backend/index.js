const express = require("express");
const app = express();
const port  =8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user ,Password}=req.query;
    res.send(`standard GET response and welcome  ${user}`);

});
app.post("/register",(req,res)=>{
    console.log(req.body);
    let {user,password} = req.body;
    res.send(`Standard Post respose ${user}`);
});

app.listen(port,()=>{
    console.log(`listening to po rt ${port}`);
});
