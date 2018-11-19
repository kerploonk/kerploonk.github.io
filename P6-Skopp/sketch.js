var x = 0;
var y = 0;
var xSpeed = 2;
var ySpeed = 0;
var gravity = 0.2;
var stig = 0;
var spadiBreidd = 100;
var spadiThykkt = 10;
var spadiY;
var boltiStaerd = 20;

function setup() {
	createCanvas(400,600);
  spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(255,255,150);
  fill(100,100,random(150,255));
  rect(x, y, 20, 20);
  x = x + xSpeed;
  y = y +ySpeed;
  ySpeed = ySpeed+gravity;
  if ((x > width) || (x < 0)) {
    xSpeed = xSpeed * -1;

  }
  if (y > (height-10)) {
    ySpeed = ySpeed * -0.9;
    y = height-15;
  }
  if(abs(spadiY - y) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - x) < boltiStaerd/2 + spadiBreidd/2 && ySpeed>0){
    ySpeed = ySpeed * -1;
		stig = stig + 1;
	}

  fill(255,0,255);
	rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
	fill(0);
	text("Stig: " + stig,20,20);
}
