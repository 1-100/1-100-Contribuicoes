PImage original;
PImage atualizada;
float[] brilho = new float[250000];
int cores_qtd = 1;

void setup() {
  size(500, 500);
  colorMode(HSB, 100);
  original = loadImage("imagem.png");
  atualizada = createImage(500, 500, RGB);
  
  
  
  original.loadPixels();
  for (int y = 0; y < original.height; y++) {
    for (int x = 0; x < original.width; x++) {
      int pixel_index = x + y * original.width;
      color pixel = original.pixels[pixel_index];
      brilho[pixel_index] = (brightness(pixel));
      //int pixel_brilho_map = floor(map(pixel_brilho, 0, 100, 0, cores_qtd));
      //float pixel_nova_cor = map(pixel_brilho_map, 0, cores_qtd, 0, 100);
      //atualizada.pixels[pixel_index] = color(0, 0, pixel_nova_cor);
    }
  }

}

void draw() {
  atualizada.loadPixels();
  for (int y = 0; y < original.height; y++) {
    for (int x = 0; x < original.width; x++) {
      int pixel_index = x + y * original.width;
      int pixel_brilho_map = floor(map(brilho[pixel_index], 0, 100, 0, cores_qtd));
      float pixel_nova_cor = map(pixel_brilho_map, 0, cores_qtd, 0, 100);
      atualizada.pixels[pixel_index] = color(0, 0, pixel_nova_cor);
    }
  }
  atualizada.updatePixels();
  image(atualizada, 0, 0);
  save("saida/" + cores_qtd + ".jpg");
  cores_qtd++;
  println(cores_qtd);
  if(cores_qtd > 100) {
    exit();
  }
}