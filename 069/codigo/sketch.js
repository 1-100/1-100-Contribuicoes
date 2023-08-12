// https://pt.wikipedia.org/wiki/Tri%C3%A2ngulo_de_Pascal

let linhas;
let linha_ultima;
let texto_tamanho;
let contador;

function setup() {
  createCanvas(500, 500);
  contador = 0;
  
  linhas = [
      [  1  ],
      [1,  1],
    ];

  linha_ultima = linhas.length -1;
  for(let i = 0; i < 98; i++) {
    linhas.push(nova_linha(linhas[linha_ultima]));
    linha_ultima = linhas.length -1;
  }

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(texto_tamanho);
  textFont('MONO');
  frameRate(5);
  noLoop();

}

function draw() {
  background(0);
  console.log(contador);
  let texto = ""
  for(let i = 0; i <= contador; i++) {
    let linha_texto = "";
    linhas[i].forEach(n => {
      linha_texto += n;
    });
    texto += linha_texto;
    if(i < contador) {
      texto += "\n";
    }
  }

  texto_tamanho = height / (contador + 1) * 0.825;
  textSize(texto_tamanho);
  textLeading(texto_tamanho * 1.2);
  translate(texto_tamanho * 0.14, 0);
  text(texto, width/2, height/2);
  
  // save((contador + 1) + ".jpg");
  contador++;
  if(frameCount == 100) {
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

function mousePressed() {
  loop();
}