IntList pontosx = new IntList(); 
IntList pontosy = new IntList();; 


int intervalo; 
int inicio; 

int grad = 0; 


void setup() {
  background(75);
  size(500, 500);
  strokeWeight(1);
  stroke(255);
  frameRate(10);

  intervalo = width/10;
  inicio = intervalo/2;


  for (int a = inicio; a <= width; a += intervalo) {
    for (int b = inicio; b <= height; b += intervalo) {
      point (a, b);
    }
  }

  
  
  for (int a = inicio; a <= width; a += intervalo) {
    for (int b = inicio; b <= height; b += intervalo) {
      pontosx.append(a);
      pontosy.append(b);
    }
  }


  pontosx.shuffle();
  pontosy.shuffle();
  //println(pontosx, pontosy);
  //println(pontosx.size(), pontosy.size());
}


void draw() {

  if (frameCount > 1) {


    line(pontosx.get(grad), pontosy.get(grad), pontosx.get(grad+1), pontosy.get(grad+1));
    grad++;
  }
  saveFrame("saida/sketch_1_100_linhas-###.jpeg");

  if (grad == 99) {
    stop();
    exit();
  }
}
