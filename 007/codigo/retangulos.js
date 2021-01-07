// Desenhar 100 retângulos sobrepostos em posições e ângulos randômicos

let counter;
let x, y, angulo, opacidade, largura, altura;

function setup() {
  createCanvas(500, 500);
  background(0); // fundo preto
  frameRate(10); // reduzir framerate
  
  counter = 1; // começar com contador no 1
}

function draw() {
  
  // posições e ângulos randômicos
  x = random(width);
  y = random(height);
  angulo = random(-50, 50);
  
  opacidade = 240;
  largura = 40;
  altura = 180;
  
  rectMode(CENTER);
  angleMode(DEGREES);
  
  // retângulos brancos, sem contorno
  noStroke();
  fill(255, opacidade);

  push();
  translate(x, y);
  rotate(angulo);
  rect(0, 0, largura, altura);
  pop();

  // salvar frames em jpg
  saveCanvas('sequencia-marina' + counter, 'jpg');
  
  counter++; // incrementar o contador
  
  // quando chegar a 100, limpar canvas e reiniciar contador
  if (counter > 100){
    clear();
    background(0);
    counter = 1;
  }
    
}