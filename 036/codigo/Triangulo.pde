class Triangulo
{
  int x;
  int y;
  int angulo;
  
  Triangulo(int _x,int _y)
  {
     x= _x;
     y = _y;
     angulo = 0;
  }
  
  void draw()
  {
   
    noStroke();
    fill(100);
    pushMatrix();
    rectMode(CENTER);
    translate(x,y);
    rotate(angulo * PI/2);
    beginShape();
    vertex(-125,-125);
    vertex(125,-125);
    vertex(125,125);
    endShape();
    popMatrix();
  }
}
