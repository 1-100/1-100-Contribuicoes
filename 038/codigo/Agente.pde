// Extensão do Agente (O Código Transcendente - Cap.7):
class Agente {
  
  // Atributos:
  float posXA, posYA, posX, posY;
  float angulo;
  float passo;
  float fatorRuido;
  
  // Construtor:
  Agente(float _posX, float _posY, float _angulo, float _passo) {
    posX = _posX;
    posXA = posX;
    posY = _posY;
    posYA = posY;
    angulo = _angulo;
    passo = _passo;
    fatorRuido = 1;
  }
  
  void defFatorRuido(float _fatorRuido) {
    fatorRuido = _fatorRuido;
  }
  
  // Inspiração Inicial:
  // https://ximera.osu.edu/mooculus/calculus3/vectorFields/digInVectorFields
  // http://www.math.umd.edu/~petersd/241/html/ex28.html
  PVector campoCircular(float _x, float _y, float _f) {
    double x = (noise.eval(_x, _y + _f) - noise.eval(_x, _y - _f))/_f;
    double y = (noise.eval(_x + _f, _y) - noise.eval(_x - _f, _y))/_f;
  
    return new PVector((float)x, (float)(-y));
  }
  
  // Métodos:
  
  // Atualiza a posição espacial do agente:
  void atualizar() {
    // Grava a posição anterior:
    posXA = posX;
    posYA = posY;
    // Atualiza a posição atual:
    PVector posTemp = campoCircular(0.005*posX, 0.005*posY, fatorRuido);
    posTemp.mult(0.5);
    posX = posX + posTemp.x;
    posY = posY + posTemp.y;
  }
  
  // Forma do agente - Reta:
  void exibirComoReta() {
    stroke(0,125);
    strokeWeight(1);
    line(posXA, posYA, posX, posY);
  }
}
