
function setup() {
	createCanvas(1000, 500);
  frameRate(0.5);
}

function draw() {
	background(200,0,200);
  HEIMSKR(375,200,25,random(45,75),20,random(20,25));
  HEIMSKR(750,200,25,random(50,100),20,random(20,25));
}

function HEIMSKR(x,y,bukurW,bukurH,hendurW,hendurH){

//bukur
fill(0,255,0);
beginShape();
vertex(x-bukurW*0.5, y+bukurH*2);
vertex(x-bukurW*2, y+bukurH*2);
vertex(x-bukurW*2, y+bukurH*0.5);
vertex(x-bukurW*0.5, y+bukurH*0.5);
endShape(CLOSE);

//hendur
fill(255,200,255);
ellipse(x-bukurW*0.5,y+bukurH*1.25,hendurW,hendurH);
ellipse(x-bukurW*2,y+bukurH*1.25,hendurW,hendurH);

//haus

}
