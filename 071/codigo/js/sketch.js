const meses = [
  {
    'numero': 1,
    'nome': 'janeiro',
    'qtd_dias': 31
  },
  {
    'numero': 1,
    'nome': 'fevereiro',
    'qtd_dias': 28
  },
  {
    'numero': 1,
    'nome': 'março',
    'qtd_dias': 31
  },{
    'numero': 1,
    'nome': 'abril',
    'qtd_dias': 30
  }
];

const semana = [
  {
    'numero': 1,
    'nome': 'domingo',
  },
  {
    'numero': 2,
    'nome': 'segunda',
  },
  {
    'numero': 3,
    'nome': 'terça',
  },
  {
    'numero': 4,
    'nome': 'quarta',
  },
  {
    'numero': 5,
    'nome': 'quinta',
  },
  {
    'numero': 6,
    'nome': 'sexta',
  },
  {
    'numero': 7,
    'nome': 'sábado',
  }
]
 
let ano_dia = 1;
let ano_mes = 1;
let ano_semana = 1;
let semana_dia = 1;
let mes_dia = 1;
let semana_linha = 0;

let margem = 50;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  ellipseMode(CENTER);
  frameRate(5);
}

function draw() {
  background(100);
  folhinha_grid();
  
  console.log(ano_dia, ano_semana, meses[ano_mes-1].nome, semana[semana_dia-1].nome, mes_dia );
  folhinha(ano_mes-1, semana_dia-1, mes_dia, semana_linha);
  // save(ano_dia + '.jpg');

  ano_passagem();
  if(ano_dia > 100) {
    noLoop();
  }
}

function ano_passagem() {
  ano_dia++;
  if (semana_dia < 7) {
    semana_dia++;
  } else {
    semana_dia = 1;
    ano_semana++;
    semana_linha++;
  }

  if( mes_dia < meses[ano_mes-1].qtd_dias ) {
    mes_dia++;
  } else {
    mes_dia = 1;
    semana_linha = 0;
    ano_mes++;
  }
}

function folhinha(mes, dia_semana, dia_mes) {
  let largura = width - margem * 2;
  let altura = width - margem * 2;
  
  let celula_largura = largura / 7;
  let celula_altura = altura / 7;
  let celula_diametro = celula_altura - margem * 0.1;

  translate(margem, margem);
  textSize(40);
  //Mes
  let mes_x = celula_largura * 0.5;
  let mes_y = celula_altura  * 0.5;
  let mes_texto = meses[mes].nome[0].toUpperCase();
  celula(mes_x, mes_y, celula_diametro, mes_texto);

  //Semana
  let sem_x = celula_largura * dia_semana + (celula_largura * 0.5);
  let sem_y = celula_altura + (celula_altura  * 0.5);
  let sem_texto = semana[dia_semana].nome[0].toUpperCase();
  celula(sem_x, sem_y, celula_diametro, sem_texto);

  //Dia
  let dia_x = sem_x;
  let dia_y = celula_altura * (semana_linha % 6) + (celula_altura * 2.5);
  celula(dia_x, dia_y, celula_diametro, dia_mes);
  

}

function celula(x, y, d, t) {
  fill(255);
  noStroke();
  text(t, x, y + d * 0.05);
  noFill();
  stroke(255);
  ellipse(x, y, d, d);
}


function folhinha_grid() {
  let largura = width - margem * 2;
  let altura = width - margem * 2;
  
  let celula_largura = largura / 7;
  let celula_altura = altura / 7;

  push();
  translate(margem, margem);


  for(let j = 0; j < 7; j++) {
    for(let i = 0; i < 7; i++) {
      let x = i * celula_largura;
      let y = j * celula_altura;
      let index = i + j * 7;
      noFill();
      stroke(255);
      rect(x, y, celula_largura, celula_altura);
      // textSize(40);
      // text(index.toString().padStart(2, '0'), x + celula_largura/2, y + celula_altura * 0.5);
    }
  }
  pop();

}