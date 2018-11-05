
function setup() {
	createCanvas(700, 500);
	noStroke();
}

function draw() {
	background(0);

	if(mouseX < width/2 && mouseY < height / 2){
    fill(255,255,255);
    triangle(width/4,0,width/16,height/2,5*width/16,height/2);
    fill(0,255,0);
    rect(width/2,0,width/2,height/2);
    fill(0,0,255);
    rect(0,height/2,width/2,height/2);
    fill(255,200,0);
  	rect(width/2,height/2,width/2,height/2);
	}
	if(mouseX > width/2 && mouseY < height / 2){
    fill(255,0,0);
    rect(0,0,width/2,height/2);
    fill(0,0,255);
    rect(0,height/2,width/2,height/2);
    fill(255,200,0);
    rect(width/2,height/2,width/2,height/2);
	}
	if(mouseX < width/2 && mouseY > height / 2){
    fill(255,0,0);
    rect(0,0,width/2,height/2);
    fill(0,255,0);
    rect(width/2,0,width/2,height/2);
    fill(255,200,0);
    rect(width/2,height/2,width/2,height/2);
	}
	if(mouseX > width/2 && mouseY > height / 2){
    fill(255,0,0);
    rect(0,0,width/2,height/2);
    fill(0,255,0);
    rect(width/2,0,width/2,height/2);
    fill(0,0,255);
    rect(0,height/2,width/2,height/2);


	}
}
