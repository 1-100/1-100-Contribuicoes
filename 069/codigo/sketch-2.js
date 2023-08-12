// https://pt.wikipedia.org/wiki/Tri%C3%A2ngulo_de_Pascal

let linhas;
let linha_ultima;
let contador;
let margem;

function setup() {
  createCanvas(500, 500);
  contador = 0;
  margem = 40;
  
  linhas = [
      [  1  ],
      [1,  1],
    ];

  linha_ultima = linhas.length -1;
  for(let i = 0; i < 98; i++) {
    linhas.push(nova_linha(linhas[linha_ultima]));
    linha_ultima = linhas.length -1;
  }
  noStroke();
  frameRate(10);
}

function draw() {
  console.log(contador);
  background(0);
  translate(margem, margem);
  let altura = (height - margem * 2) / (contador + 1);
  //Loop linhas
  for(let j = 0; j <= contador; j++) { 
    let largura = (width - margem * 2) / linhas[j].length;
    let valor_maximo = max(linhas[j]);
    //Loop linha
    for(let i = 0; i < linhas[j].length; i++) {
      let cor;
      if(valor_maximo == 1) {
        cor = 0;
      } else {
        cor = map(linhas[j][i], 1, valor_maximo, 0, 255);
      }
      
      let x = i * largura;
      let y = j * altura;
      fill(cor);
      stroke(255);
      strokeWeight(0.5);
      rect(x, y, largura, altura);
    }
  }
  
  save((contador + 1) + ".jpg");
  contador++;

  if(contador == 100) {
    noLoop();
  }
}

function nova_linha(linha) {
  let linha_nova = [];
  linha_nova.push(1);
  for(let i = 0; i < linha.length -1; i++ ) {
    let numero_primeiro = linha[i];
    let numero_segundo = linha[i+1];
    let numero_novo = numero_primeiro + numero_segundo;
    linha_nova.push(numero_novo);
  }
  linha_nova.push(1);
  return linha_nova;
}