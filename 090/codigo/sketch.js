// Vizinhança
// A B C
// D X E
// F G H

let grade;
let grade_tamanho;
let contador = 1;

function setup() {
  createCanvas(500, 500);
  frameRate(5);
  grade_tamanho = 15;
  let celula_tamanho = width / grade_tamanho;
  grade = [];
  for(let j = 0; j < grade_tamanho; j++) {
    for(let i = 0; i < grade_tamanho; i++) {
      let celula = {
        "x": i * celula_tamanho,
        "y": j * celula_tamanho,
        "tamanho": celula_tamanho,
        "cor": 0,
      }
      grade.push(celula);
    }  
  }

}

function draw() {

  background(0);
  stroke(255);
  let celula_aleatoria = floor(random(grade.length));

  // checar vizinhança
  celula_B = celula_aleatoria - grade_tamanho;
  if(celula_B >= 0){
    atualiza_cor(celula_B);
  }

  celula_G = celula_aleatoria + grade_tamanho;
  if(celula_G < grade.length){
    atualiza_cor(celula_G);
  }

  celula_D = celula_aleatoria -1;
  if(celula_D >= 0 && celula_aleatoria % grade_tamanho != 0){
    atualiza_cor(celula_D);
  }

  celula_E = celula_aleatoria +1;
  if(celula_E < grade.length && celula_aleatoria % grade_tamanho < grade_tamanho-1){
    atualiza_cor(celula_E);
  }

  celula_A = celula_D - grade_tamanho;
  if(celula_A >= 0 && celula_aleatoria % grade_tamanho != 0 ){
    atualiza_cor(celula_A);
  }

  celula_F = celula_D + grade_tamanho;
  if(celula_F < grade.length && celula_aleatoria % grade_tamanho != 0 ){
    atualiza_cor(celula_F);
  }

  celula_C = celula_E - grade_tamanho;
  if(celula_C >= 0 && celula_aleatoria % grade_tamanho < grade_tamanho-1 ){
    atualiza_cor(celula_C);
  }

  celula_H = celula_E + grade_tamanho;
  if(celula_H < grade.length && celula_aleatoria % grade_tamanho < grade_tamanho-1 ){
    atualiza_cor(celula_H);
  }

  
  grade.forEach(c => {
    fill(c.cor);
    rect(c.x, c.y, c.tamanho, c.tamanho);
  });

  // save(contador + ".jpg");
  contador++;
  if(contador > 100) {
    noLoop();
  }
}

function atualiza_cor(c) {
  if(grade[c].cor > 0) {
    grade[c].cor = 0;
  } else {
    grade[c].cor += 255;
  }
}


