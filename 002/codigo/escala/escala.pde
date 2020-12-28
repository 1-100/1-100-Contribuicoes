// Variável para fazer a contagem de 1 a 100
float contagem = 1; 

void setup() {
  size(500, 500);
  frameRate(5);
  // Defini o sistema de cor para ir até 100 
  // para facilitar o preenchimento posteriormente
  colorMode(RGB, 100);
}

void draw() {
  background(0); 
  
  float retanguloLargura = (width-1)/contagem;

  for(int i = 1; i <= contagem; i++) {
    // Caso seja o primeiro retangulo, pinta de preto
    // Caso seja o último retângulo, pinta de branco
    // Caso esteja entre o primeiro e o último, pinte com um cinza proporpocional
    if(i == 1) {
      fill(100);
    } else if(i == contagem) {
      fill(0);
    } else {
      fill(map(i, 1, contagem, 99, 1));
    }
    // Calcula a posição do retângulo baseada na largura dele
    float x = (i - 1) * retanguloLargura;
    rect(x, 0, retanguloLargura, height-1);
  }
  
  // Salva a imagem na pasta imagens
  saveFrame("imagens/###.jpg");
  
  // Incrementa a contagem em 1
  contagem++;
  
  // Caso a contagem passe de 100, encerra.
  if (contagem > 100) {
    exit();
  }


}
