int contador = 1;

void setup() {
  size(500, 500);
  //frameRate(5);
  noStroke();
}

void draw() {
  background(127);
  
  float barra_largura = 500.0 / contador;
  float barra_altura_incremento = 500.0 / (contador * contador);
  for(int i = 1; i <= contador; i++) {
    float x_a = (i - 1) * barra_largura;
    float y_a = 0;
    float barra_altura_a = (i * i) * barra_altura_incremento;
    int cor_a = i % 2 == 0 ? 0 : 255;
    stroke(cor_a);
    fill(cor_a);
    rect(x_a, y_a, barra_largura, barra_altura_a);

    float x_b = x_a;
    float y_b = barra_altura_a;
    float barra_altura_b = height - barra_altura_a;
    int cor_b = 255 - cor_a;
    stroke(cor_b);
    fill(cor_b);
    rect(x_b, y_b, barra_largura, barra_altura_b);
  }
  save("saida/" + contador + ".jpg");
  contador++;
  if (contador > 100) {
    noLoop();
  }
}
