PGraphics pg;
PImage img;
float time;

void setup() {
  size(500, 500, P2D);
  pg = createGraphics(600, 500, P2D);
  img = loadImage("img.jpg");
}

void draw() {
  time+=3.6;
  pg.beginDraw();
  pg.background(0);
  pg.textSize(600);
  pg.image(img,0,0);
  pg.endDraw();
  image(pg, 0, 0);

  //THIS CODE IS BASICALLY A FORK FROM
  //TIM RODENBRÖKER'S CODE, WITH A FEW CHANGES
  //+ USING AN IMAGE THAT I'VE CREATED WITH 
  //PATTERNS FROM @LEXALOFFLE
  
  //GRID
  int tilesX = 50;
  int tilesY = 25;

  int tileW = int(width/tilesX);
  int tileH = int(height/tilesY);

  for (int y = 0; y < tilesY; y++) {
    for (int x = 0; x < tilesX; x++) {
      
      int wave = int(sin(radians(time + ((x+5) * (y+5))))*15);
     
      
      // SOURCE
      int sx = x*tileW + wave + 50;
      int sy = y*tileH;
      int sw = tileW;
      int sh = tileH;


      // DESTINATION
      int dx = x*tileW;
      int dy = y*tileH;
      int dw = tileW;
      int dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
  
  if(frameCount <= 100){
    saveFrame("####.jpg");
  }
}
