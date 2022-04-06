float feixo_x, feixo_y, feixo_xv, feixo_yv, feixo_d;
int contador;

void setup() {
  size(500, 500);
  feixo_x = width/2;
  feixo_y = height/2;
  feixo_d = 5;
  feixo_xv = random(-2, 2);
  feixo_yv = random(-2, 2);
  contador = 0;
  noStroke();
  background(20);
  frameRate(400);
}

void draw() {

  ellipse(feixo_x, feixo_y, feixo_d, feixo_d);
  feixo_x += feixo_xv;
  feixo_y += feixo_yv;

  if (feixo_x < 0 || feixo_x> width) {
    feixo_xv *= -1;
    salvar();
  }

  if (feixo_y < 0 || feixo_y > height) {
    feixo_yv *= -1;
    salvar();
  }
  if (contador == 100) {
    exit();
  }
}

void salvar() {
  save("saida/" + contador + ".jpg");
  contador++;
  background(20);
  println(contador);
}
