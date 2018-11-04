// Hér kemur kóðinn þinn:
function setup(){
  createCanvas(320,320);
  background(0,0,0);

  var x = 40
  var y = 40
  //blár
  fill(36,47,207);
  rect(x*7,y*7,40,40);
  rect(x*7,y*0,40,40);
  rect(x*0,y*7,40,40);
  rect(x*0,y*0,40,40);

  //hvítur
  fill(255,255,255);
  rect(x*0,y*5,40,80);
  rect(x*7,y*4,40,120);
  rect(x*2,y*4,80,120);
  rect(y*4,y*5,40,80);

  //rauður
  fill(205,13,13);
  rect(x,y*5,40,120);
  rect(x,y*0,40,120);
  rect(x*6,y*0,40,120);
  rect(x*6,y*5,40,120);
  triangle(x*2,y*0,x*3,y*0,x*2,y);
  quad(x*6,y,x*6,y*6,x*5,y*6,x*5,y*2);
  rect(x*4,y*3,40,80);

  //ljósgulur
  fill(236,229,16);
  triangle(x,y*3,x*2,y*3,x,y*4);
  quad(80,280,80,320,120,320,160,280);
  triangle(160,280,200,280,200,320);
  quad(200,240,200,320,240,320,240,280);

  //grábrúnn
  fill(56,55,33);
  rect(280,40,40,120);
  rect(240,120,40,80);



}
