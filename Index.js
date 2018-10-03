const express = require('express');
const app = express();
const nameobj = require(__dirname + "/Main/Names.js");
const Random = require(__dirname + "/Main/random.js");


var obj1= new Random();


app.get("/", (req,res)=>{


res.json(obj1);

});


app.listen(8080);
