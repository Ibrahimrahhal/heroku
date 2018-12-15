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

res.set("Access-Control-Allow-Origin", "*");
res.send(oneNameGenerator());

});





app.get("/male", (req,res)=>{

res.set("Access-Control-Allow-Origin", "*");
res.send(oneNameMGenerator());

});


app.get("/female", (req,res)=>{

res.set("Access-Control-Allow-Origin", "*");
res.send(oneNameFGenerator());

});



app.get("/male/:num", (req,res)=>{
let x = req.params.num;
if(x < 1000){
let arr=[oneNameMGenerator()];
for(let i =1;i<x;i++){
arr.push(oneNameMGenerator());


}

res.set("Access-Control-Allow-Origin", "*");
res.json(arr);
}
else{
  res.set("Access-Control-Allow-Origin", "*");
  res.send("Max Number is 1000 Name");


}
});

app.get("/female/:num", (req,res)=>{

let x = req.params.num;
if(x < 1000){
let arr=[oneNameFGenerator()];
for(let i =1;i<x;i++){
arr.push(oneNameFGenerator());


}
res.set("Access-Control-Allow-Origin", "*");
res.json(arr);
}else{
  res.set("Access-Control-Allow-Origin", "*");
  res.send("Max Number is 1000 Name");


}
});


app.get("/:num", (req,res)=>{

let x = req.params.num;
if(x<1000){
let arr=[oneNameGenerator()];
for(let i =1;i<x;i++){
arr.push(oneNameGenerator());


}
res.set("Access-Control-Allow-Origin", "*");
res.json(arr);
}
else{
  res.set("Access-Control-Allow-Origin", "*");
  res.send("Max Number is 1000 Name");


}
});


// app.listen(80,()=>{console.log("error");});
app.listen(process.env.PORT || 8080,()=>{console.log("works");});


function oneNameGenerator(){
  var obj1= new Random();
  var obj2= new Random();
  let fullname ="";
  if(Math.random()>=0.49){
    if(obj1.randmalename[0] != obj2.randmalename[0])
    fullname= obj1.randmalename[0]+" "+ obj2.randmalename[0]+" "+ obj2.randsurname[0];
    else
    fullname= obj1.randmalename[0]+" "+ obj2.randmalename[1]+" "+ obj2.randsurname[0];

  }else{
  fullname= obj1.randfmalename[0]+" "+ obj2.randmalename[0]+" "+ obj2.randsurname[0];


  }
  return fullname;


}

function oneNameMGenerator(){
  var obj1= new Random();
  var obj2= new Random();
  let fullname ="";

    if(obj1.randmalename[0] != obj2.randmalename[0])
    fullname= obj1.randmalename[0]+" "+ obj2.randmalename[0]+" "+ obj2.randsurname[0];
    else
    fullname= obj1.randmalename[0]+" "+ obj2.randmalename[1]+" "+ obj2.randsurname[0];console.log("male function");
  return fullname;


}
function oneNameFGenerator(){
  var obj1= new Random();
  var obj2= new Random();
  let fullname ="";
  fullname= obj1.randfmalename[0]+" "+ obj2.randmalename[0]+" "+ obj2.randsurname[0];
  return fullname;


}
