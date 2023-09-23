let amount = 10;
let steps = 100;
let thickness = 0.4;
let direction = [];
let saveImages = false;

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  pixelDensity(1);
  randomSeed(0);

  for (let i = 0; i < amount; i++) {
    direction[i] = [];
    for (let j = 0; j < amount; j++) {
      direction[i][j] = 0;
    }
  }
}

function draw() {
  background(0);

  let posX = int(random(amount - 1));
  let posY = int(random(amount - 1));
  direction[posY][posX]++;

  let switchY;
  let landing = posY + direction[posY][posX];
  for (let i = 0; i < amount; i++) {
    if (i != posY && landing == i + direction[i][posX]) {
      switchY = i;
      break;
    }
  }
  if (switchY === undefined) switchY = posY;
  direction[switchY][posX]--;

  let w = width / (amount + 2);
  let h = height / (amount + 2);
  push();
  translate(w * 1.5, h * 1.5);

  noFill();
  strokeWeight((height / amount) * thickness);
  strokeJoin(ROUND);
  for (let i = 0; i < amount; i++) {
    let y = i;
    stroke(255 - 240 * (i / amount));

    beginShape();
    for (let j = 0; j < amount; j++) {
      vertex(w * j, h * y);
      y += direction[y][j];
    }
    endShape();
  }
  pop();

  if (frameCount == steps) noLoop();
  if (saveImages) save("1-100_" + frameCount +".jpg");
}