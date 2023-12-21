// Codigo original:
// https://www.youtube.com/watch?v=kUexPZMIwuA&t

let contador = 1;
let pontos = [];
let margem = 50;
let distancias;
let pg;

function setup() {
  createCanvas(500, 500);
  pg = createGraphics(500, 500);
  frameRate(5);
}

function draw() { 
  for(let i = 0; i < contador; i++) {
    pontos[i] = createVector(random(margem, width-margem), random(margem, height-margem));
  }

  pg.loadPixels();
  for(let y = 0; y < height; y++) {
    for(let x = 0; x < width; x++) {
      distancias = [];
      for(let i = 0; i < pontos.length; i++) {
        let distancia = (pontos[i].x - x)**2 + (pontos[i].y - y)**2;
        distancias.push(distancia)
      };
      let menor = min(distancias);
      let cor = (Math.sqrt(menor) / 100) * 255;
      let index = (x + y * width) * 4;
      pg.pixels[index] = cor;
      pg.pixels[index + 1] = cor;
      pg.pixels[index + 2] = cor;
      pg.pixels[index + 3] = 150;
    }
  }
  pg.updatePixels();
  blendMode(BLEND);
  image(pg, 0, 0);
  blendMode(OVERLAY);
  image(pg, 0, 0);
  
  save(contador + '.jpg');
  contador++;
  if(contador > 100) {
    noLoop();
  }
}