
float colunas_qtd = 11;
float linhas_qtd = 48;
boolean debug = false;
int primo_contagem = 0;
int contador = 1;

void setup() {
  size(500, 500);
}

void draw() {
  background(0);

  float celula_largura = (width - 1)/colunas_qtd;
  float celula_altura = (height - 1)/linhas_qtd;


  for (int i = 0; i < colunas_qtd; i++) {
    for (int j = 0; j < linhas_qtd; j++) {

      float x = i * celula_largura;
      float y = j * celula_altura;
      int indice = j + i * int(linhas_qtd) + 1;

      fill(0);
      stroke(255);
      strokeWeight(1);
      if (checar_primo(indice)) {
        if (primo_contagem <= contador) {
          fill(255);
        }
      }
      rect(x, y, celula_largura, celula_altura);

      if (debug) {
        noStroke();
        fill(255, 0, 0);
        textSize(10);
        text(indice, x, y+10);
      }
    }
  }
  save("saida/" + contador + ".jpg");

  primo_contagem = 0;
  contador++;
  if (contador > 100) {
    exit();
  }
}

boolean checar_primo(int n) {
  boolean checar = true;
  if (n <=2 ) {
    primo_contagem++;
    return checar;
  }
  for (int divisor =2; divisor < n; divisor++) {
    if (n % divisor == 0) {
      checar = false;
      return checar;
    }
  }
  primo_contagem++;
  return checar;
}
