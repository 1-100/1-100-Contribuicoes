// Aviso aos desavisados
//
// Se você chegou aqui por causa do resultado desse codigo
// recomendo nao olhar pra ele e ver o video da onde copiei
// toda a parte interessante, o que tem aqui é uma serie de 
// gambiarras para funcionar no p5.js
//
// Links para os orignais
// https://github.com/hunar4321/particle-life
// https://www.youtube.com/watch?v=0Kx4Y9TVMGg

let particulas;
let interacoes;
let contador;

let impar, par;

let atoms;

function setup() {
  createCanvas(500, 500);
  contador = 1;
  reset(contador);
  frameRate(100);
}

function draw() {
  
  rule(impar, impar, 0.32);
  rule(par, par, 0.25);
  rule(impar, par, -0.3);
  rule(par, impar, -0.33);
  for (i = 0; i < atoms.length; i++) {
    show(atoms[i].x, atoms[i].y, atoms[i].color, 1);
  }
  interacoes ++;
  if(interacoes == 300) {
    save(contador + ".jpg");
    contador++;
    reset(contador);
  }

  if(contador == 101) {
    noLoop();
  }
}


// Código criado Hunar Ahmad com pequenas modificações minha
// para funcionar no p5.js
// https://github.com/hunar4321/particle-life
// https://www.youtube.com/watch?v=0Kx4Y9TVMGg

function reset(qtd) {
  console.log(contador);
  let qtd_par, qtd_impar;

  if (qtd % 2 == 0) {
    qtd_impar = qtd/2;
    qtd_par = qtd/2; 
  } else {
    qtd_impar = floor(qtd/2);
    qtd_par = round(qtd/2);
  }

  interacoes = 0;
  atoms = [];
  impar = create(qtd_par, color(255));
  par = create(qtd_impar, color(255));
  background(0);
} 

show = (x, y, c, s) => {
  strokeWeight(s);
  stroke(c);
  point(x, y);
};

atom = (x, y, c) => {
  return { x: x, y: y, vx: 0, vy: 0, color: c };
};

create = (number, color) => {
  group = [];
  for (let i = 0; i < number; i++) {
    group.push(atom(random(50,450), random(50,450), color));
    atoms.push(group[i]);
  }
  return group;
};
rule = (atoms1, atoms2, g) => {
  for (let i = 0; i < atoms1.length; i++) {
    fx = 0;
    fy = 0;
    for (let j = 0; j < atoms2.length; j++) {
      a = atoms1[i];
      b = atoms2[j];
      dx = a.x - b.x;
      dy = a.y - b.y;
      d = Math.sqrt(dx * dx + dy * dy);
      if (d > 0 && d > 100) {
        F = (g * 1) / d;
        fx += F * dx;
        fy += F * dy;
      }
    }
    a.vx = (a.vx + fx) * 0.3;
    a.vy = (a.vy + fy) * 0.3;
    a.x += a.vx;
    a.y += a.vy;
    // if (a.x <= 0 || a.x >= 500) { a.vx *= -1; }
    // if (a.y <= 0 || a.y >= 500) { a.vy *= -1; }
  }
};

