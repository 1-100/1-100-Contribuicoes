//talvez lhe pareça estranho a possibilidade de existir universos condicionados entre duas variáveis inventadas 

int areia = 1;
int terra = 100;
int espaco = 500;

void setup() {  
  size(500, 500);
  frameRate(terra-(areia*75));
  background(areia-1);
  noFill();
}

void draw() { 
  int existencia = frameCount;
  
  int quantidade = ((existencia*existencia)/(terra/(areia*4)));
  int condicionado = (quantidade)+5;
  int deserto = (condicionado)*areia;
 
  stroke((terra*2)+(areia*55), terra-existencia);
 
  ellipse(espaco-existencia*5,espaco-existencia*5,deserto,deserto);
  ellipse(existencia*5,existencia*5,deserto,deserto);
// arrastada pelo impulso lúdico
  ellipse(espaco-existencia*5,existencia*5,deserto,deserto);
  ellipse(existencia*5,espaco-existencia*5,deserto,deserto);


  if(existencia >99){
    stop();
// destino!
    stop();
    stop();
    stop();
// a vida é uma coisa engraçada, o arranjo misterioso de uma lógica impiedosa
    stop();
  }
  
  saveFrame("memorias_###.jpeg");
  
}
