float t = 0;
PFont font;

void setup() {
  size(500, 500);
  font = createFont("Helvetica-Bold", 200);
}

void draw() {
  background(0);
  translate(width/2, height/2);
  drawImg(frameCount%100);
  float a = map(frameCount, 0, 100, 0, PI);
  t = sin(a) * 0.5;
  if (frameCount <= 100) saveFrame("imagens/" + frameCount % 100 + ".png");
}

void drawImg(int frame) {
  textFont(font);
  textAlign(CENTER);
  float[] noise = calcNoise(100);
  float[] angles =  calcAng(noise);
  for (int i = 0; i <  (frame % angles.length)+1; i++) {
    float radius = map(noise[i], 0, 1, -height*0.1, -height*0.5+20);

    if (i == frame) {
      strokeWeight(4);
      stroke(255);
      fill(255);
      textSize(20);
    } else {
      color c = 90;
      strokeWeight(2);
      stroke(c);
      fill(c);
      textSize(10);
    }
    
    line(0, 0, 0, radius);
    noStroke();
    text(i+1, 0, radius-5);
    rotate(angles[i]);
  }
}


float[] calcNoise(int num) {
  float[] n =  new float[num];
  float max = 0;
  float min = 1;
  for (int i = 0; i < num; i++) {
    float a = norm(i, 0, num-1) * TWO_PI;
    float r = 0.35;
    float x = sin(a) * r + r;
    float y = cos(a) * r + r;
    float angle = noise(x, y, t);
    n[i] = angle;
    if (angle > max) max = angle;
    if (angle < min) min = angle;
  }
  for (int i = 0; i < num; i++) {
    n[i] = map(n[i], min, max, 0, 1);
  }

  return n;
}

float[] calcAng(float[] n) {
  float total = 0;
  float[] as =  new float[n.length];
  for (int i = 0; i < n.length; i++) {
    total += n[i];
  }
  for (int i = 0; i < n.length; i++) {
    as[i] = map(n[i], 0, total, 0, TWO_PI);
  }
  return as;
}
