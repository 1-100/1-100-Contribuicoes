float num, numDezena, dezena; 
color degrade;
int stroke;

void setup() {
  size(500, 500);
  background(255);
  num = 0;
  numDezena = 1;
  stroke = 1;
  dezena = 10;
  
}

void draw() {
  background(255);

  num++;

  ellipseMode(CORNER);
  stroke(stroke/2);

  drawNum(num, numDezena);

  if (num % dezena == 0) {
    numDezena++; 
    num = 0;
  } 
  
  if (frameCount <= 100) {
    saveFrame("imagens/###.jpg");
  } else {
    exit(); 
  }

}

void drawNum(float numCount, float numDez) {

  if (numDez-1 >= 1) {

    for (int i = 0; i < numDez-1; i++) {
      
        

      for (int k = 0; k <= (numDez-1)*10; k++) {
        degrade = int(255-(255/dezena)*i);
        fill(degrade);
        
        ellipse((width/dezena)*k, (height/numDez)*i, width/dezena-stroke, height/numDez-stroke);
        
        
      }
      
      degrade = int(255-(255/dezena)*(i+1));
        fill(degrade);
      
    }
  }


  for (int i = 0; i <= numCount; i++) {   
    ellipse((width/numCount)*i, (height/numDez)*(numDez-1), width/numCount-stroke, height/numDez-stroke);
  }
  
}
