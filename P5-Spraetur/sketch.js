

var flag;
var hammer;

function preload() {
  flag = loadImage('Myndir/flag.png'); // https://en.wikipedia.org/wiki/File:Flag_of_the_Soviet_Union_(reverse).svg
  hammer = loadImage('Myndir/hamar.png'); // https://de.wikipedia.org/wiki/Datei:Hammer_and_sickle.svg
}

function setup() {
  createCanvas(1280,640);
  background(flag);
}

function mousePressed() {
  imageMode(CENTER);
  image(flag,mouseX,mouseY);
}

function keyPressed() {
  imageMode(CORNER);
  background(hammer);
}
