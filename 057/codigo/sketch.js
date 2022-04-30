let wave_grid;
let counter = 1;
let save = false;

function preload() {
  modulos.forEach(m => {
    m.img = loadImage( "/modulos/" + m.file );
  });
}

function setup() {
  createCanvas(500, 500);
  frameRate(5);
  wave_grid = new Wave(10, width);
  wave_grid.init();
}

function draw() {
  background(0);
  wave_grid.display();
  if( save ) {
    saveCanvas(counter + ".jpg");
  }
  if( counter < 100) {
    wave_grid.update();
  } else {
    noLoop();
  }
  counter++;
}

