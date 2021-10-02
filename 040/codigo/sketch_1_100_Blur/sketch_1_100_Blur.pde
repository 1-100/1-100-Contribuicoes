void setup() {
  size(500,500);
  rectMode(CENTER);
}

void draw() {
 fill(255,20);
 rect(width/2, height/2, width-1, height-1);
 noFill();
 rect(width/2, height/2,  200, 200);
 filter(BLUR);
}
