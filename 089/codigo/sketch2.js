let contador = 1;
let n_maximo = 4;
let n_colunas = 5;
let n_linhas = 5;
let margem_colunas = 10;
let margem_linhas = 20;
let total_tracinhos = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(5);

}

function draw() {
  background(0);

  let margem_externa_colunas = margem_colunas * 2;
  let margem_externa_linhas = margem_linhas * 2;
  let margem_interna_colunas = margem_colunas * (n_colunas - 1);
  let margem_interna_linhas = margem_linhas * (n_linhas - 1);
  
  let largura = (width - (margem_externa_colunas + margem_interna_colunas)) / n_colunas;
  let altura = (height - (margem_externa_linhas + margem_interna_linhas)) / n_linhas;

  let x = margem_colunas;
  let y = margem_linhas;
  let total = 0;

  if ( contador % n_maximo == 0 || contador >= n_maximo ) {
    
    for(let i = 0; i < floor(contador / n_maximo); i++) {
      
      tracinhos(4, x, y, largura, altura);

      x += largura + margem_colunas;
      
      if (x > width - margem_colunas) {
        x = margem_colunas;
        y += altura + margem_linhas;
      }  
      total+= n_maximo;
    }

  }

  if (contador % n_maximo != 0 || contador < n_maximo ) {
    tracinhos(contador - total, x, y, largura, altura);
  }

  // save(contador + '.jpg');
  contador++;
  
  if(contador > 100) {
    noLoop();
  }
}

function tracinhos(n, x, y, largura, altura) {
  let espacamento = largura / n_maximo;
  let tracos_verticais = n == n_maximo ? n - 1 : n;

  // fill(255, 0, 0, 40);
  // rect(x, y, largura, altura);

  for(let i = 0; i < tracos_verticais; i++) {
    let ponto_A_x = x + ((i + 1) * espacamento);
    let ponto_A_y = y;
    let ponto_B_x = ponto_A_x;
    let ponto_B_y = y + altura;
    stroke(255);
    lapis(ponto_A_x, ponto_A_y, ponto_B_x, ponto_B_y);
  }

  if(n == n_maximo) {
    let ponto_A_x = x;
    let ponto_A_y = y + altura * 0.9;
    let ponto_B_x = x + largura;
    let ponto_B_y = y + altura * 0.1;
    stroke(255);
    lapis(ponto_A_x, ponto_A_y, ponto_B_x, ponto_B_y);
  }
}

function lapis(A_x, A_y, B_x, B_y) {
  let noise_offset = random(100);
  for(let i = 0; i < 1; i+= 0.01) {
    L_x = lerp(A_x, B_x, i);
    L_y = lerp(A_y, B_y, i);
    strokeWeight(random(1, 3));
    point(L_x + (noise(i + noise_offset) * 5), L_y + (noise(i + noise_offset) * 5));
  }
}