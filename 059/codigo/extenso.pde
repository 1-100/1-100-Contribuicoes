//Esse código utiliza uma versão 
//modificada da fonte Outward que não está 
//inclusa nesse repositório. Para facilitar
//a composição todos os caracteres tiveram
//sua altura modificada para 1000 e a linha
//descendente foi setada em 0 e ascendente
//em 1000.

//Caso queira acesso a essa fonte modificada
//entrar em contato.

int contador = 1;
int texto_tamanho = 480;
PGraphics pg;
PFont font;

void setup() {
  size(500, 500);
  font = createFont("Outward-Block.otf", texto_tamanho * 2);
  textFont(font, texto_tamanho * 2);
  textSize(texto_tamanho);
}

void draw() {
  background(0);
  println(n_extenso(contador));
  letreiro(n_extenso(contador).toUpperCase());
  save("saida/" + contador + ".jpg");
  contador++;
  
  if (contador > 100) {
    noLoop();
  }
}

void letreiro(String texto) {
  
  int texto_largura = int(textWidth(texto) - 8);
  pg = createGraphics(texto_largura, texto_tamanho);
  pg.beginDraw();
  pg.textFont(font, texto_tamanho);
  pg.textSize(texto_tamanho );
  pg.text(texto, 0, texto_tamanho);
  pg.endDraw();
  float x = (width - texto_tamanho)/2;
  float y = (height - texto_tamanho)/2;
  image(pg, x, y, texto_tamanho, texto_tamanho);
}
