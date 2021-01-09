PFont font;

void setup() {
  size(500, 500);
  font = createFont("data/Verdana Bold.ttf", 100);
  noStroke();
  fill(255);
}

void draw() {
  background(0);
  drawImage((frameCount%100)+1);
  if (frameCount <= 100) saveFrame("imagens/" + frameCount % 100 + ".png");
}

void drawImage(int n) {
  float y = 0;
  float dist = 3;
  float h = ((height - ((n-1)*dist)) / n);
  textFont(font);
  textSize(h*1.2+dist);
  textAlign(RIGHT);
  float x0 = 50;
  for (int i = 1; i < n+1; i++) {
    float x = x0;
    float tam = ((width - x - ((i-1)*dist)) / i);
    for (int j = 0; j < i; j++) {
      rect(x, y, tam, h);
      x+=tam+dist;
    }
    text(i, x0-dist, y+h);
    y+=h+dist;
  }
}
