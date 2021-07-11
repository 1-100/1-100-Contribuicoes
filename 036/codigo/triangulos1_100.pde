Triangulo triangulos[]  = new Triangulo[4];
void setup()
{
  for (int i = 0; i < 4; i++)
  {
    triangulos[i] = new Triangulo(125 + (i % 2) * 250,125 + (i / 2) * 250);
  }
  frameRate(10);
  background(255);
  size(500,500);
  
}

void draw()
{
 background(255);
 int valor = frameCount;
 for (int i = 0; i < 4; i++)
  {
    triangulos[i].angulo = valor % 4;
    valor = (valor - triangulos[i].angulo) / 4;
    triangulos[i].draw();
  }  
  saveFrame("output/"+(frameCount) +".jpg");
  if (frameCount >= 100)
  {
    exit();
  }
}
