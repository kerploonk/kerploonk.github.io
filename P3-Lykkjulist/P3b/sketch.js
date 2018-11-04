

function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  colorMode(HSB);
  frameRate(3);
  strokeWeight(3);
}

function draw() {
  for(var p = 300; p > 0; p = p - 30){
    fill(random(200,400),75,100);
    ellipse(200,200,p);
  }
}
