const express = require('express');
const app = express();
const nameobj = require(__dirname + "/Main/Names.js");
const Random = require(__dirname + "/Main/random.js");


// console.log(obj1);

app.get("/", (req,res)=>{
var obj1= new Random();
res.set("Access-Control-Allow-Origin", "*");
res.json(obj1);

});






/////////////////fullname route
app.get("/fullname", (req,res)=>{
var obj1= new Random();
var obj2= new Random();
var fullname ="";
if(Math.random()>=0.49){
fullname= obj1.randmalename[0]+" "+ obj2.randmalename[0]+" "+ obj2.randsurname[0];

}else{
fullname= obj1.randfmalename[0]+" "+ obj2.randmalename[0]+" "+ obj2.randsurname[0];


}
res.set("Access-Control-Allow-Origin", "*");
res.send(fullname);

});








// app.listen(80,()=>{console.log("error");});
app.listen(process.env.PORT || 8080,()=>{console.log("works");});
