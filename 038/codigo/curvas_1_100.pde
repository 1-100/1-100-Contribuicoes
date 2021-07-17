Modulo modulos[] = new Modulo[7];

void setup()
{
  frameRate(10);
  for(int i = 0;i <7; i++)
  {
    modulos[i] = new Modulo();
    modulos[i].raio = 90;
  }
  size (500,500);
  
  
  ; 
}

void draw()
{
  background(200);
  pushMatrix();
  translate(width/2,height/2);
  
  
  int valor = frameCount;
  for(int i = 0; i <7; i++)
  {
    
    modulos[i].angulo = (valor % 2);
    valor = (valor - modulos[i].angulo) / 2;
    if (i == 0)
    {
      modulos[0].draw();
    }
    else
    {
      
      pushMatrix();
      translate(0, -2 * modulos[i].raio * sin(radians(60)));
      rotate(radians(60.0*(i-1)));
      modulos[i].draw();
      popMatrix();
      rotate(radians(60.0));
    }
  }
  popMatrix();
  
  saveFrame("output/"+(frameCount) +".jpg");
  if (frameCount >= 100)
  {
    exit();
  }
}
