Table dados;
PImage[] imagens =  new PImage[99];
PImage frame;

int res = 32;
float escala_noise = 0.08;
int contador = 1;

void setup() {
  size(500, 500);
  dados = loadTable("formas_analisadas.csv", "header");
  int i = 0;
  frame = loadImage("frame-" + contador + ".jpg");
  for (TableRow row : dados.rows()) {
    String caminho = row.getString("caminho");
    imagens[i] = loadImage(caminho);
    i++;
  }
}

void draw() {
  background(0);
  frame = loadImage("frame-" + contador + ".jpg");
  float s = width/float(res);
  for(int j = 0; j < res; j++) {
    for(int i = 0; i < res; i++) {
     float x = i * s;
     float y = j * s;
     int pixel = frame.get(floor(x),floor(y));
     float brilho = brightness(pixel);
     int brilho_index = floor(map(brilho, 0, 255, 0, 98));
     float v = brilho;
     image(imagens[brilho_index], x, y, s, s);
    }
  }
  save("saida/" + contador + ".jpg");
  contador++;
  if(contador > 100) {
    exit();
  }
}
