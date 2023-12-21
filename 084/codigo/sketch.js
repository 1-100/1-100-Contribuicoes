let onda;
let amplitude_inicial;
let res;
let qtd;
let sangria;
let contador;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  res = 500;
  qtd = 6;
  sangria = 2;
  amplitude_inicial = 30;
  onda = onda_init();
  onda_adiciona(onda, amplitude_inicial, TWO_PI*2);
  contador = 1;
}

function draw() {
  
  background(255);  
  
  for(let i = 0; i <= qtd + sangria; i++) {
    push();
    let y_incremento = (height / qtd)
    let y = (i * y_incremento) - (y_incremento * sangria/2);
    translate(0, y);
    let cor = i % 2 == 0 ? 0 : 255;
    onda_desenha(onda, cor);
    pop();
  }
  
  onda_adiciona(onda, random(5, 10), random(HALF_PI, TWO_PI * contador/4));
  
  // save(contador + '.png');

  contador++;
  console.log(contador);
  if(contador > 100) {
    noLoop();
  }

}

function onda_init() {
  o = [];
  for(let i = 0; i <= res; i++) {
    let v = {
      'x': map(i, 0, res, 0, width + 4),
      'y': 0,
    }
    o.push(v);
  }
  return o;
}

function onda_adiciona(onda, amplitude, comprimento) {
  let deslocamento_inicio = random(TWO_PI);
  for(let i = 0; i < res; i++) {
    let deslocamento = cos(map(i, 0, res, deslocamento_inicio, comprimento));
    let y = amplitude * deslocamento;
    onda[i].y += y;
  }
}

function onda_desenha(onda, cor) {
  noStroke();
  fill(cor);
  beginShape();
  for(let i = 0; i < onda.length; i++) {
    vertex(onda[i].x, onda[i].y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape();
}