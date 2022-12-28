let cartas;
let contador;
let carta_largura;
let carta_altura;
let salvar = true;

function preload() {
  cartas = [];
  for (let i = 0; i <= 10; i++) {
    cartas[i] = loadImage("../imagens/" + i + ".png");
  }
  cartas[11] = loadImage("../imagens/A.png");
  cartas[12] = loadImage("../imagens/B.png");
  cartas[13] = loadImage("../imagens/C.png");
  cartas[14] = loadImage("../imagens/VERSO.png");

}

function setup() {
  createCanvas(500, 500); 
  contador = 1;
  carta_largura = 160;
  carta_altura = carta_largura * 1.7;
  frameRate(5);
}

function draw() {
  background(0);

  base();
  contagem(contador);
  if(salvar) {
    save(contador + ".jpg");
  }

  contador++;
  if(contador > 100) {
    noLoop();
  }
}

function base() {
  for (let i = 0; i < 2; i++) {
    let margem = (width - carta_largura * 2)/3;
    let x = margem + (i * (carta_largura + margem));
    let y = height/2 - carta_altura/2;
    image(cartas[14], x, y, carta_largura, carta_altura);
  }
}

function contagem(numero) {

  let numero_base14 = (numero).toString(14);
  let numero_base14_digitos = numero_base14.length;
  console.log(numero, numero_base14, numero_base14_digitos);
  
  if (numero_base14_digitos > 1) {
    for (let i = 0; i < numero_base14_digitos; i++) {
      let margem = (width - carta_largura * 2)/3;
      let x = margem + (i * (carta_largura + margem));
      let y = height/2 - carta_altura/2;
      carta(numero_base14[i], x, y);
    }
  }

  if (numero_base14_digitos == 1) {
    let margem = (width - carta_largura * 2)/3;
    let x = margem + (1 * (carta_largura + margem));
    let y = height/2 - carta_altura/2;
    carta(numero_base14, x, y);
  }

}

function carta(valor, x, y) {
  let indice = 0;
  switch (valor) {
    case "a":
      indice = 10;
      break;

    case "b":
      indice = 11;
      break;

    case "c":
      indice = 12;
      break;

    case "d":
      indice = 13;
      break;

    default:
      indice = valor;
      break;
  }
  image(cartas[indice], x, y, carta_largura, carta_altura);

}
