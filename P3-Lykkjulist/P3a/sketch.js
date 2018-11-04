

function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(2);
}

var x = 10
var y = 10

function draw(){

  for(var k = 0; k < 20 ; k =k +1){
  fill(random(200,400),75,100);
  for(var i = 0; i < 20 ; i = i + 1){
      ellipse(x + k*20, y + i*20, 15, 15);

    }
  }
}
