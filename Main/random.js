const nameobj = require(__dirname + "/Names.js");


function Random()
{

  var randmale = Math.round(Math.random()*23);
  var randfemale = Math.round(Math.random()*23);
  var randsur = Math.round(Math.random()*33);
  while(randmale >= 20){
  randmale-- ;
  }
  while(randfemale >= 20){
  randfemale--;

  }
  while(randsur >= 30){
  randsur--;

  }
  this.randmalename =[(nameobj.nmale[randmale]),(nameobj.nmale[randmale+1]),(nameobj.nmale[randmale+2])];
  this.randfmalename = [(nameobj.nfemale[randfemale]),(nameobj.nfemale[randfemale+1]),(nameobj.nfemale[randfemale+2])];
  this.randsurname = [(nameobj.surnames[randsur]),(nameobj.surnames[randsur+1]),(nameobj.surnames[randsur+2])] ;



}








module.exports = Random;
