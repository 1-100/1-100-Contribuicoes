PImage imagem;
float contador = 1.0;
float t = TWO_PI / 100;
;

void setup() {
  size(500, 500);
  imagem = loadImage("imagem.jpg");
  imageMode(CENTER);
}

void draw() {
  translate(width/2, height/2);
  float incremento = width / contador;

  float ultimo = 0;

  for (int i = 0; i < contador; i++) {
    float tamanho = 500 - (i * incremento);
    image(imagem, 0, 0, tamanho, tamanho);
    rotate(t);
    ultimo = tamanho;
  }

  println(contador, ultimo);

  save(int(contador) + ".jpg");
  contador++;

  if (contador > 100) {
    noLoop();
  }
}
