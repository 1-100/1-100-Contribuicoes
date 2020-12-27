// Variável para fazer a contagem de 1 a 100
int contagem = 1; 

void setup() {
  
  // Define o tamanho em 700x700px
  // Aqui a imagem foi definida com 700x700px para facilitar o código,
  // depois a imagem será reduzida externamente para 500x500px
  size(700, 700);
  // Define uma taxa de atualização mais baixa
  //frameRate(10);
  
}

void draw() {
  
  // Pinta o fundo de branco
  background(0); 
  
  // Define a quantidade retângulos a serem pintados
  int retangulo_qtd = 7; 
  // Define a largura do retângulo
  float retangulo_largura = width / retangulo_qtd; 
  
  // Converte a contagem em binário
  String binario = binary(contagem, 7);
  // Converte o número binário em uma lista de números
  String[] binario_lista = binario.split("");
    
  // Faz um loop pode os números da lista de binários
  for (int j = 0; j < binario_lista.length; j++) {
    noStroke(); // Remove a opção de desenhar o contorno
    // Testa se o número é igual a 1
    if (binario_lista[j].equals("1")) {
      // Caso positivo desenha o retângulo preenchido no lugar correspondente
      fill(255);
      rect(j * retangulo_largura, 0, retangulo_largura, height);
    } else {
      fill(0);
      rect(j * retangulo_largura, 0, retangulo_largura, height);
    }
    
    // Caso não seja o primeiro retangulo desenha uma linha de divisória
    if (j != 0) {
      stroke(0); 
      line(j * retangulo_largura, 0, j * retangulo_largura, height); 
    }
    
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
