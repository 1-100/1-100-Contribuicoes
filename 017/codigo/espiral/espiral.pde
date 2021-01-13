Espiral r;
PFont fonte;

void setup() {
  size(500, 500);

  background(0);
  smooth();
  r = new Espiral(width/2, height/2, 150, 99);
  fonte = loadFont("Tomorrow-Light-48.vlw");
  textFont(fonte, 15);
  stroke(255);
  strokeWeight(8);
}

void draw() {
  background(0);
  r.play();  
}
