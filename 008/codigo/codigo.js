var n = 0;
let xoff = 0.0;
let yoff = 100;
let x = 0;
let speed = 1;
let counter = 1;


function setup() {
  createCanvas(500, 500);
  background(0);
  frameRate(1);
}

function draw() {



  drawingContext.shadowBlur = 1;
  drawingContext.shadowColor = 'black';


  let n1 = noise(xoff) * width;
  let a1 = noise(yoff) * height;


  let wave1 = (cos(frameCount * 0.01) * 300);
  if (wave1 <= 0) {
    wave1 = 0;
  }

  translate(width / 2, height / 2);
  rotate(frameCount * 0.02);

  // noStroke(0);
  //stroke(255);
  rectMode(CENTER);
  // noFill();
  strokeWeight(1);
  stroke(255);
  fill(0);
  rect(0, 0, wave1, wave1);


  xoff += 1;
  yoff += 1;
  x = x + speed;

  if ((a1 > height) || (a1 < 0)) {
    speed = speed * -1;
  }

  // salvar frames em jpg
  saveCanvas('sequencia' + counter, 'jpg');
  counter++;
}