let contador = 1;
// let seed = 1;

function preload() {
  font = loadFont('InstrumentSerif-Regular.otf');
}

function setup() {
  createCanvas(500, 500);
  textFont(font);
  textSize(150);
  textAlign(CENTER, CENTER);
  fill(255);
  frameRate(5);
  // randomSeed(1);
}

function draw() {
  background(0);
  
  text(gerar_conta(contador), width * 0.485, height * 0.46)
  save(contador + '.jpg');
  contador++;
  
  if(contador > 100) {
    noLoop();
  }
}

function gerar_conta(n) {
  let sorteio = floor(random(4));

  switch (sorteio) {
    case 0:
      return multiplicacao(n);
    case 1:
      return divisao(n);
    case 2:
      return adicao(n)
    case 3:
      return subtracao(n)
  }
}

function multiplicacao(n)  {

  let divisor = floor(random(2, n))
  let resultado = n / divisor;

  let invalido = true;
  let protecao = 0;

  while(invalido) {
    if(resultado % 1 == 0) {
      invalido = false;
      resultado = resultado.toString().replace('.', ',');
      return `${resultado}×${divisor}`;
    }

    let resultado_decimal = resultado.toString().split('.')[1];
    if(resultado_decimal.length <= 2) {
      invalido = false;
      resultado = resultado.toString().replace('.', ',');
      return `${resultado}×${divisor}`;
    }

    divisor = floor(random(2, n))
    resultado = n / divisor;
    protecao++
    if(protecao > 1000) {
      break
    }
  }
}

function divisao(n)  {
  let multiplicador = floor(random(2, 20))
  let resultado = n * multiplicador;
  return `${resultado}÷${multiplicador}`
}

function adicao(n) {
  let subtraendo = floor(random(1, n -1))
  let resultado = n - subtraendo;
  return exp = `${resultado}+${subtraendo}`;
}

function subtracao(n) {
  let parcela = floor(random(n, 100))
  let resultado = n + parcela;
  return `${resultado}−${parcela}`;
}