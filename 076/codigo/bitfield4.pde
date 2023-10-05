//https://www.metafilter.com/192164/Patterns
int i = 1;
int s = 8;
PGraphics pg;

void setup() {
  size(500, 500);
  pg = createGraphics(1024, 1024);
  pg.ellipseMode(CORNER);
  //frameRate(10);
}

void draw() {
  pg.beginDraw();
  pg.background(255);
  for (int y = 1; y < (pg.width-1)/s; y++) {
    for (int x = 1; x < (pg.height-1)/s; x++) {
      float v = ((x ^ y)) / i;
      if ( v > 0.5 ) {
        pg.noStroke();
        pg.fill(0);
        pg.rect(x*s, y*s, s, s);
      }
    }
  }
  pg.endDraw();
  image(pg, 0, 0, width, height);
  println(i);
  //save("saida/" + i + ".jpg");
  i++;
  if( i == 101 ) {
    noLoop();
  }
}
