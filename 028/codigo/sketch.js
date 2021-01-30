let X = [];
let Y = [];
let W = [];
let Z = [];
let x;
let y;
let w;
let z;
let d = 9;
let u = 0;
let inc = 1;

//save frames
let f = 0;
let ff = 100;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(255);

  //gerar coordenadas dos pontos
  for (let a = 0; a < 180; a += 18) {
    let r = 200;
    x = r * cos(a);
    y = r * sin(a);
    w = r * cos(a + 180);
    z = r * sin(a + 180);

    X.push(floor(x));
    Y.push(floor(y));
    W.push(floor(w));
    Z.push(floor(z));
  }

  //desenhar grid pontos
  translate(width / 2, height / 2);
  rotate(9);
  for (let c = 0; c < 10; c++) { //contador

    //pontos "pretos"
    strokeWeight(6);
    stroke(0);
    point(X[c], Y[c]);
    point(W[c], Z[c]);

    //pontos "brancos"
    strokeWeight(4);
    stroke(255);
    point(W[c], Z[c]);
  }
}

function draw() {

  // //fade
  //   push();
  //   fill(255, 40);
  //   rect(0, 0, width, height);
  //   pop();

  //desenhar linhas
  translate(width / 2, height / 2);
  rotate(9);
  strokeWeight(1);
  stroke(0);
  line(X[d], Y[d], W[u], Z[u]);
  d -= inc;
  if (d < 0) {
    u += inc;
    d = 9;
  }
  if (u == 10) {
    u = 0;
  }

  //parar contador
  if (frameCount >= 100) {
    noLoop();
  }

  // // saveframes
  // f += inc;
  // if (f <= ff + 1) {
  //   saveCanvas('frame', 'jpg');
  // }
  // if (f > ff - 1) {
  //   noLoop();
  // }
}