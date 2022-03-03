int contador = 1;
int fonteTamanho = 200;
PFont fonte;

void setup() {
  size(500, 500);    
  fonte = createFont("segoeui-symbol.ttf", fonteTamanho);
  background(0);
  textFont(fonte);
  textAlign(CENTER, CENTER);

}

void draw() {
  background(0);
  String unicode = str(2600 + contador);
  text((char(unhex(unicode))), width/2, height/2-fonteTamanho*0.27);
  saveFrame(contador + ".jpg");
  contador++;
  if(contador > 100) {
    exit();
  }
}
