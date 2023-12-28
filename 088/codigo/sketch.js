let contador = 0;
let imagem;
let fatias;
let fatias_qtd;
let fatias_altura;
let deslocamentos;
let deslocamentos_grd;

function preload() {
  imagem = loadImage('foto2.jpg');
}

function setup() {
  createCanvas(500, 500);

  frameRate(5);
  
  fatias = [];
  fatias_qtd = 15;
  fatias_altura = imagem.height/fatias_qtd;
  
  for(let j = 0; j < fatias_qtd; j++) {
    for(let i = 0; i < fatias_qtd; i++) {
      let x = i * fatias_altura;
      let y = j * fatias_altura;
      let index = i + j * fatias_qtd;
      let fatia = {
        "id": index,
        "imagem": imagem.get(x, y, fatias_altura, fatias_altura),
        "trocada": false
      }
      fatias[index] = fatia;
    }
  }
}

function draw() {
  troca();
  for(let j = 0; j < fatias_qtd; j++) {
    for(let i = 0; i < fatias_qtd; i++) {
      let x = i * fatias_altura;
      let y = j * fatias_altura;
      let index = i + j * fatias_qtd;
      image(fatias[index].imagem, x, y, fatias_altura, fatias_altura);
      // fatias[index].trocada ? fill(255, 0, 0) : fill(0, 255, 0);
      // textAlign(TOP)
      // text(fatias[index].id, x, y+10);
    }
  }
  save(contador + '.jpg');
  
  if(contador == 100) {
    noLoop();
  }

}

function troca() {
  let fatia_A = fatias[floor(random(fatias.length))];
  let fatia_B = fatias[floor(random(fatias.length))]; 
  let invalidas = true;
  
  let tentativas = 0;
  while( invalidas ) {
    if( fatia_A.id != fatia_B.id &&
      fatia_A.trocada == false &&
      fatia_B.trocada == false
      ) {
      let imagem_A = fatia_A.imagem;
      let imagem_B = fatia_B.imagem;
      fatia_A.imagem = imagem_B;
      fatia_B.imagem = imagem_A;
      fatia_A.trocada = true;
      fatia_B.trocada = true;
      invalidas = false;
      console.log(contador);
      contador++;
    }

    fatia_A = fatias[floor(random(fatias.length))];
    fatia_B = fatias[floor(random(fatias.length))];
    tentativas++;
    if(tentativas > 100) {
      invalidas = false;
    }
  }
}
