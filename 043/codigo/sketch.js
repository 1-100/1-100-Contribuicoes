let n = 1;
let r = 4;


//save frames
let f = 0;
let ff = 100;
let inc = 1;


function setup() {
  createCanvas(500, 500);

  angleMode(DEGREES);
  background(255);
}


function draw() {
translate(width / 2, height / 2);

  beginShape();
  for (let a = 0; a <= 360; a += 360 / n) {
    let x = r * sin(a);
    let y = r * cos(a);

    stroke(0);
    noFill();
    strokeWeight(0.5);
    vertex(x, y);
  }
  endShape(CLOSE);

  if (r <= 360 * 0.65) {
    r += 3.6 * 0.65;
    n++;
  } else {
    noLoop();
  }

  //parar contador
  if (frameCount >= 100) {
    noLoop();
  }

  // //reset
  // if (frameCount >= 100) {
  //   frameCount = 0;
  //   background(255);
  //   d = 9;
  //   u = 0;
  // }

  // saveframes
  f += inc;
  if (f <= ff + 1) {
    saveCanvas('frame', 'jpg');
  }
  if (f > ff - 1) {
    noLoop();
  }
}