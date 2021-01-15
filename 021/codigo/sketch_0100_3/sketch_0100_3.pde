PFont font;
int marginLR = 40;
int marginTB = 20;

String[] s = {".", "+", "=", "*", ";", "&", "%", "@", "↠"};

void setup() {
  size(500, 500);
  frameRate(20);
  font = createFont("jet.ttf", 14);
  textFont(font);
}

void draw() {
  background(0);
  fill(255);
  text("UM --------------------", marginLR, 50);
  text("CEM -------------------", marginLR+230, 50);

  for (float x=(marginLR); x<230; x+=8) {
    for (float y=marginTB*5; y<height; y+=40) {
      float r = random(5);
      if (r<4) {
        text(" ", x, y);
        text(" ", x+230, y);
      } else {
        text("-", x, y);
        text("-", x+230, y);
      }
    }
  }

  int index = 0;

  for (float y=marginTB*5; y<height; y+=40) {
    for (float x=(marginLR); x<230; x+=20) {
      index++;
      if (index>frameCount) {
        text(":", x, y-18);
        text(" ", x+230, y-18);
      } else {
        if (index==frameCount) {
          text(s[8], x, y-18);
          text(s[8], x+230, y-18);
        } else if (index==frameCount-1) {
          text(s[7], x, y-18);
          text(s[7], x+230, y-18);
        } else if (index==frameCount-2) {
          text(s[6], x, y-18);
          text(s[6], x+230, y-18);
        } else if (index==frameCount-3) {
          text(s[5], x, y-18);
          text(s[5], x+230, y-18);
        } else if (index==frameCount-4) {
          text(s[4], x, y-18);
          text(s[4], x+230, y-18);
        } else if (index==frameCount-5) {
          text(s[3], x, y-18);
          text(s[3], x+230, y-18);
        } else if (index==frameCount-6) {
          text(s[2], x, y-18);
          text(s[2], x+230, y-18);
        } else if (index==frameCount-7) {
          text(s[1], x, y-18);
          text(s[1], x+230, y-18);
        } else if (index==frameCount-8) {
          text(s[0], x, y-18);
          text(s[0], x+230, y-18);
        } else if (index<frameCount-8) {
          text(" ", x, y-18);
          text(":", x+230, y-18);
        }
      }
    }
  }
  
  
  if(frameCount<=100){
    saveFrame("####.jpg");
  }
}
