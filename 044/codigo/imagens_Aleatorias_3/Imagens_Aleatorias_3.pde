PImage[] imagens = new PImage[100];
int contador = 0;

void setup() {
  size(500, 500);
  for (int i = 0; i < 100; i++) {
    imagens[i] = loadImage(i + ".jpg");
  }
  frameRate(10);
  imageMode(CENTER);
}

void draw() {
  float ruido = random(1);
  float tamanho = map(ruido, 0, 1, 300, 500);
  float x = random(width);
  float y = random(height);
  image(imagens[contador], x, y, tamanho, tamanho);
  filter(GRAY);
  contador++;
  saveFrame("saida/###.jpg");
  if(contador == 100) {
    noLoop();
  }
}