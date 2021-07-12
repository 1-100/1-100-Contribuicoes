class Modulo
{
  int x;
  int y;
  int angulo;
  float raio;
  
  Modulo()
  {
     x= 0;
     y = 0;
     angulo = 0;
  }
  
  void draw()
  {    
    pushMatrix();
    //translate(x,y);
    rotate(angulo * radians(60));
    for (int i = 0; i < 3; i++)
    {
      rotate(radians(120));
      drawCurves();  
      
    }
    strokeWeight(1);
    stroke(255);
    hex(0,0,raio,6);
    popMatrix();
    
  }
  
  void drawCurves()
  {
    noFill();
    stroke(50);
    strokeWeight(15);
    pushMatrix();
    translate( raio, 0);
    arc(0, 0,raio/2,raio/2,radians(120),radians(240) );
    arc(0, 0,raio,raio,radians(120),radians(240) );
    arc(0, 0,1.5 * raio,1.5 * raio,radians(120),radians(240) );
    popMatrix();
    
  }
  
  void hex(float x,float y,float r,int n)
{
  beginShape();
  for(int i=0;i<n;i++)
  {
    float ix = x + r * cos(i * 2*PI/n );
    float iy = y + r * sin(i * 2*PI/n);
    vertex(ix,iy);    
  }
  endShape(CLOSE);
}
}
