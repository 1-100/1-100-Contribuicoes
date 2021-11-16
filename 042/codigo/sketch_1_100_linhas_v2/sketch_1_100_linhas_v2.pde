import java.util.Collections;

ArrayList<PVector> pontosrec = new ArrayList();
PVector pontos;

int intervalo;
int inicio;

int grad = 0;


void setup() {
  background(75);
  size(500, 500);
  strokeWeight(1);
  stroke(255);
  //frameRate(10);
  //noLoop();

  intervalo = width/10;
  inicio = intervalo/2;


  for (int a = inicio; a <= width; a += intervalo) {
    for (int b = inicio; b <= height; b += intervalo) {
      point (a, b);
    }
  }


  for (int a = inicio; a <= width; a += intervalo) {
    for (int b = inicio; b <= height; b += intervalo) {
      pontosrec.add(new PVector(a, b));
    }
  }

  Collections.shuffle(pontosrec);
  //println (pontosrec);
}

void draw() {

  if (frameCount > 1) {

    line(pontosrec.get(grad).x, pontosrec.get(grad).y, pontosrec.get(grad+1).x, pontosrec.get(grad+1).y);
    grad++;
    
  }
  
  saveFrame("saida/sketch_1_100_linhas-###.jpeg");

  if (grad == 99) {
    stop();
    exit();
  }
}
