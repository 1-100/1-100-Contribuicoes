float movx = 2.5; 
float yoff = 0.0; 

void setup(){
  size (500, 500);
  frameRate(30);
  colorMode(RGB, 100);
  noStroke();
  background(100);
  rectMode(CENTER);  
}

void draw(){
  translate(0, 250);
  yoff = yoff + .08;
  float n = noise(yoff) * height;
  float m = map(n, 0, height, 0, 100);
  fill(m);
  rect(movx, 0, 2.5, n);
  movx = movx+width/100;
  
  if(movx >=width){
    stop();
  }
  
  saveFrame("linha_###.jpeg");
  
}
