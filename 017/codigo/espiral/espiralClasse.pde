class Espiral {
  float x, y; // ponto inicial
  float r; // raio
  float comp; // comprimento máximo da lista
  float compAtual = 0; // comprimento atual da lista
  float anguloAtual = 0; // ângulo atual
  ArrayList <PVector> pontos; // lista de pontos
  PVector ponto;

  Espiral(float x_, float y_, float r_, float comp_) {
    x = x_;
    y = y_;
    r = r_;
    comp = comp_;  
    pontos = new ArrayList<PVector>();
  }

  void play() {
    criarPontos();
    plot();
  }

  void criarPontos () { 
    if (compAtual < comp) {
      float novoX = x+r*cos(radians(anguloAtual));
      float novoY = y+r*sin(radians(anguloAtual));
      compAtual = pontos.size();
      anguloAtual = anguloAtual + random(1, 45); // randomizar o angulo
      r = r + random(-30, 30); // randomizar o raio
      ponto = new PVector(novoX, novoY);
      pontos.add(ponto);
      println(pontos.size());
    }
  } 

  void plot() {
    noFill();
    beginShape();
    curveVertex(pontos.get(0).x, pontos.get(0).y); // primeiro ponto da curva
    curveVertex(pontos.get(0).x, pontos.get(0).y); // é tb o primeiro pontos de controle

    for (int i = 1; i < pontos.size()-1; i++) {
      curveVertex(pontos.get(i).x, pontos.get(i).y); // pontos intermediários da curva
    }
    curveVertex(pontos.get(pontos.size()-1).x, pontos.get(pontos.size()-1).y); // ultimo ponto da curva
    curveVertex(pontos.get(pontos.size()-1).x, pontos.get(pontos.size()-1).y); // é tb o ultimo ponto de controle
    endShape();
  }
}
