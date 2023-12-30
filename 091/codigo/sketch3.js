let contador = 1;
let contador_valido = 1;
let limite = 100;
let tamanho = 50;
let vertices_disponiveis = [];
let espessura = 1;

function setup() {
  createCanvas(500, 500);
  strokeCap(SQUARE);
  frameRate(5);
  randomSeed(12);
  background(0);
}

function draw() {
  
  translate(width/2, height/2);
  
  stroke(255, 150);
  strokeWeight(espessura);
  noFill();
  if(contador == 1) {
    forma_aleatoria(0, 0, tamanho, tamanho);
    contador_valido++;
  } 
  
  if(contador > 1) {
    // contador == limite ? stroke("#f00") : stroke(255);
    let vertices = structuredClone(vertices_disponiveis); //Copia a array
    
    vertices_disponiveis = [];
    
    if(vertices.length >= 4) {
      vertices = shuffle(vertices);
      for(let i = 0; i < 4; i++) {
        forma_aleatoria(vertices[i].x, vertices[i].y, tamanho, tamanho);
      }
    } else {
      // stroke("#00f");
      contador_valido = 1;
      vertices_disponiveis[0] = {
        "x": 0,
        "y": 0,
      }
      forma_aleatoria(0, 0, tamanho, tamanho);
    }
    contador_valido++;
  }
  
  // save(contador + '.jpg');
  contador++;
  
  if(contador > limite) {
    noLoop();
  }
}

function forma_aleatoria(x, y, l, a) {
  let r = floor(random(3));

  switch (r) {
    case 2:
      xis(x, y, l, a);
      break;

    case 1:
      cruz(x, y, l, a);
      break;
  
    default:
      quadrado(x, y, l, a);
      break;
  }
}

function xis(x, y, l, a) {
  pA_x = x - l/2;
  pA_y = y - a/2;
  pB_x = x + l/2;
  pB_y = y + a/2;

  pC_x = x - l/2;
  pC_y = y + a/2;
  pD_x = x + l/2;
  pD_y = y - a/2;

  line(pA_x, pA_y, pB_x, pB_y);
  line(pC_x, pC_y, pD_x, pD_y);

  registrar_vertices([pA_x, pA_y, pB_x, pB_y, pC_x, pC_y, pD_x, pD_y]);
}

function cruz(x, y, l, a) {
  pA_x = x;
  pA_y = y - a/2;
  pB_x = x;
  pB_y = y + a/2;

  pC_x = x - l/2;
  pC_y = y;
  pD_x = x + l/2;
  pD_y = y;

  line(pA_x, pA_y, pB_x, pB_y);
  line(pC_x, pC_y, pD_x, pD_y);

  registrar_vertices([pA_x, pA_y, pB_x, pB_y, pC_x, pC_y, pD_x, pD_y]);
}

function quadrado(x, y, l, a) {
  pA_x = x - l/2;
  pA_y = y - a/2;
  
  pB_x = x + l/2;
  pB_y = y - a/2;
  
  pC_x = x + l/2;
  pC_y = y + a/2;
  
  pD_x = x - l/2;
  pD_y = y + a/2;

  beginShape();
  vertex(pA_x, pA_y);
  vertex(pB_x, pB_y);
  vertex(pC_x, pC_y);
  vertex(pD_x, pD_y);
  endShape(CLOSE);

  registrar_vertices(
    [pA_x, pA_y,
    pB_x, pB_y, 
    pC_x, pC_y, 
    pD_x, pD_y]);
}

function registrar_vertices(vertices) {
  let valido = (contador_valido -1) * tamanho /2;
  for(let i = 0; i < vertices.length / 2; i++) {
    let v = {
      "x": vertices[i * 2],
      "y": vertices[i * 2 +1],
    }

    if (abs(v.x) > width/2 - tamanho || abs(v.y) > height/2 - tamanho) {
      vertices_disponiveis = [];
      espessura += 0.1;
      break;
    }
    if (
      abs(v.x) >= valido && v.y == 0 ||
      abs(v.x) >= 0 && abs(v.y) >= valido ||
      v.x == 0 && abs(v.y) >= valido ||
      abs(v.x) >= valido && abs(v.x) >= valido 
      ) {
        vertices_disponiveis.push(v);
    }
  }
}