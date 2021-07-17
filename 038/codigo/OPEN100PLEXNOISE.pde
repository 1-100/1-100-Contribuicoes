OpenSimplexNoise noise;

Agente[] ags;
float k = 1;

void setup() {
  size(500, 500);
  background(255);
  
  noise = new OpenSimplexNoise();
  
  int numAgentes = 100;
  ags = new Agente[numAgentes];
}

void draw() {
  background(255);
  
  int numAgentes = frameCount;
  ags = new Agente[numAgentes];
  
  for (int i = 0; i < numAgentes; i++) {
    // Cria e distribui os agentes pela tela:
    ags[i] = new Agente(width/2 + (1-k)*250*cos(0.01*i + i*TAU/100.0), width/2 + (1-k)*250*sin(0.01*i + i*TAU/100.0), 0, 1);
  }
  
  for(int j = 0; j < 1000; j++) {
    for (int i = 0; i < ags.length; i++) {
      // Para cada agente declarado, atualiza e exibe ele:
      ags[i].defFatorRuido(k);
      ags[i].atualizar();
      ags[i].exibirComoReta();
    }
  }
  k -= 0.01;
  
  //saveFrame(frameCount + ".JPEG");
  if(frameCount == 100) {
    exit();
  }
  
}
