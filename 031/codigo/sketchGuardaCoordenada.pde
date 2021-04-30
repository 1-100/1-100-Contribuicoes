float[] xpos = new float[100];    
float[] ypos = new float[100];                                                                                                             
int x = 0;
int y = 0;          
int largura = 15;  
float dx = 0.87 * largura; 
float dy = -0.5 * largura;

void setup() {
  size(500, 500);                                                                                    
  background(255); 
  for (int i = 0; i < xpos.length - 1; i++){
  xpos[i] = 0;
  ypos[i] = 0;
  }
  strokeWeight(12);
}

void draw() {
  if (mousePressed) {
    for (int i = 0; i < xpos.length - 1 ; i++) {
      xpos[i] = xpos[i + 1];
      ypos[i] = ypos[i + 1];
    }
    
    xpos[xpos.length - 1] = lerp(pmouseX, mouseX, 0.5);
    ypos[ypos.length - 1] = lerp(pmouseY, mouseY, 0.5);
  }
  println(xpos);
  if (keyPressed) {
    line(xpos[x] - dx, ypos[y] - dy, xpos[x] + dx, ypos[y] + dy);        
    x += 1;
    y += 1;
    saveFrame(x + ".jpg");
    if (x > xpos.length - 1) exit();
  }
  
  
}
        
