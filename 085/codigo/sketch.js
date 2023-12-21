let contador = 1;
let imagem;
let fatias;
let fatias_qtd;
let fatias_altura;
let deslocamentos;
let deslocamentos_grd;
let gravando = false;

function preload() {
  imagem = loadImage('foto2.jpg');
}

function setup() {
  createCanvas(500, 500);
  if(gravando) {
    frameRate(5);
  }
  
  fatias = [];
  fatias_qtd = 100;
  fatias_altura = imagem.height/fatias_qtd;
  deslocamentos = [];
  deslocamentos_grd = 400;
  deslocamentos_pqn = 10;

  noiseSeed(5); //1,
  for(let i = 0; i < fatias_qtd; i++) {
    let y = i * fatias_altura;
    fatias[i] = imagem.get(0, y, imagem.width, fatias_altura);

    deslocamentos[i] = map(noise(i * 0.03), 0, 1, -deslocamentos_grd, deslocamentos_grd);
    deslocamentos[i] += map(noise(i), 0, 1, -deslocamentos_pqn, deslocamentos_pqn);
  }
}

function draw() {

  translate(-width, 0);
  for(let i = 0; i < fatias.length; i++) {
    let y = i * fatias_altura;
    let x = contador/100 * deslocamentos[i];
    image(fatias[i], x, y);
  }
  translate(width, 0);
  for(let i = 0; i < fatias.length; i++) {
    let y = i * fatias_altura;
    let x = contador/100 * deslocamentos[i];
    image(fatias[i], x, y);
  }
  translate(width, 0);
  for(let i = 0; i < fatias.length; i++) {
    let y = i * fatias_altura;
    let x = contador/100 * deslocamentos[i];
    image(fatias[i], x, y);
  }
  
  if(gravando) {
    save(contador + '.jpg');
  }

  contador++;
  if(contador > 100) {
    noLoop();
  }

  // noLoop();
}
