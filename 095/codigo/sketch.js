let contador = 1;

function setup() {
  createCanvas(500, 500);
  frameRate(5);
  noStroke();
}

function draw() {
  background(0);

  let gradient = drawingContext.createLinearGradient(0, 0, width, height);
  for(let i = 1; i <= contador; i++) {
    gradient.addColorStop(i/contador, `hsl(0, 0%, ${random(100)}%)`);
  }
  drawingContext.fillStyle = gradient;
  rect(0, 0, width, height);

  // save(contador + '.jpg');
  contador++;
  
  if(contador > 100) {
    noLoop();
  }
}