const express = require('express');
const app = express();
const nameobj = require(__dirname + "/Main/Names.js");
const Random = require(__dirname + "/Main/random.js");


var obj1= new Random();
// console.log(obj1);

app.get("/", (req,res)=>{
res.set("Access-Control-Allow-Origin", "*");
res.json(obj1);

});


// app.listen(80,()=>{console.log("error");});
app.listen(process.env.PORT || 8080,()=>{console.log("error");});
