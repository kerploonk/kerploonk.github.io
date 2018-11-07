

var flag;
var hammer;

function preload() {
  flag = loadImage('Myndir/flag.png'); // https://en.wikipedia.org/wiki/File:Flag_of_the_Soviet_Union_(reverse).svg
  hammer = loadImage('Myndir/hamar.png'); // https://www.kisspng.com/png-soviet-union-logo-png-55799/

function setup() {
  createCanvas(1280,640);
  background(flag);
}

function mousePressed() {
  imageMode(CENTER);
  image(hammer,mouseX,mouseY);
}

function keyPressed() {
  imageMode(CORNER);
  background(flag);
}
