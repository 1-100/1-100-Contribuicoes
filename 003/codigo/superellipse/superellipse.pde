// Baseado no vídeo Superellipse do Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/019-superellipse.html
// https://youtu.be/z86cx2A4_3E
// https://editor.p5js.org/codingtrain/sketches/Hk-1AMTgN
// Processing transcription: Chuck England

int contagem = 1;

void setup() {
  size(500, 500);
  frameRate(10);
  background(255);
  strokeJoin(ROUND);
}

void draw() {
  background(0);
  translate(width / 2, height / 2);

  float a = 240;
  float b = 240;
  float n = map(contagem, 1, 100, 0.1, 5);
  
  fill(255);
  stroke(0);
  
  // Desenha a base da Superellipse
  beginShape();
  for (float angle = 0; angle < TWO_PI; angle += PI/12) {
    float na = 2 / n;
    float x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
    float y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));
    vertex(x, y);
  }
  endShape(CLOSE);
  
  // Cria as linhas internas Superellipse
  for (float angle = 0; angle < TWO_PI; angle += PI/12) {
    float na = 2 / n;
    float x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
    float y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));
    line(0, 0, x, y);
  }
  
  // Salva a imagem na pasta imagens
  saveFrame("imagens/###.jpg");
  
  contagem++;
  if(contagem > 100) {
    noLoop();
  }
}

float sgn(float val) {
  if (val == 0) {
    return 0;
  }
  return val / abs(val);
}
