

var flag;
var hammer;

function preload() {
  horse = loadImage('Myndir/horse.png'); //https://opengameart.org/content/animal-pack-redux
  hestur = loadImage('Myndir/hestur.png');

function setup() {
  createCanvas(1280,720);
  background(hestur);
}

function mousePressed() {
  imageMode(CENTER);
  image(horse,ouseX,mouseY);
}

function keyPressed() {
  imageMode(CORNER);
  background(hestur);
}
