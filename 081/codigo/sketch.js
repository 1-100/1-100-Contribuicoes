// APIs
// http://ip-api.com/json/201.1.0.0
// https://a.tile.openstreetmap.org/14/6045/8246.png

// Informações uteis
// https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Lon./lat._to_tile_numbers


let tiles;
let pg;
let contador;

function preload() {

  dados = shuffle(dados);

  tiles = [];
  for(let i = 0; i < 100; i++) {
    // tiles_url = `https://a.tile.openstreetmap.org/14/${dados[i].x_tile}/${dados[i].y_tile}.png`;
    let tile_a = loadImage(`https://a.tile.openstreetmap.org/14/${dados[i].x_tile}/${dados[i].y_tile}.png`);
    let tile_b = loadImage(`https://a.tile.openstreetmap.org/14/${dados[i].x_tile + 1}/${dados[i].y_tile}.png`);
    let tile_c = loadImage(`https://a.tile.openstreetmap.org/14/${dados[i].x_tile}/${dados[i].y_tile + 1}.png`);
    let tile_d = loadImage(`https://a.tile.openstreetmap.org/14/${dados[i].x_tile + 1}/${dados[i].y_tile + 1}.png`);
    let tile = [
      tile_a,
      tile_b,
      tile_c,
      tile_d
    ]
    tiles[i] = tile;
  }
}

function setup() {
  createCanvas(500, 500);
  pg = createGraphics(500, 500);
  frameRate(5);
  textAlign(CENTER, CENTER);
  textSize(30);
  textFont('JetBrains Mono');
  frameRate(5);
  contador = 0;
} 

function draw() {
  console.log(contador);
  pg.clear();
  pg.blendMode(MULTIPLY);
  background(255);
  // pg.tint(255, 230);
  for(let y = 0; y < 2; y++) {
    for(let x = 0; x < 2; x++) {
      let t_i = x + y * 2; 
      pg.image(tiles[contador][t_i], x * width/2, y * width/2, width/2, width/2)
      pg.image(tiles[contador][t_i], x * width/2, y * width/2, width/2, width/2)
      pg.image(tiles[contador][t_i], x * width/2, y * width/2, width/2, width/2)
    }
  }
  pg.filter(GRAY);
  image(pg, 0, 0, width, height);
  fill(0);
  stroke(255);
  strokeWeight(5);
  text(format_ip(dados[contador].ip), width/2, height/2);
  contador++;
  // save(contador + '.jpg');
  if(contador == 100) {
    noLoop();
  }
}

function format_ip(ip) {
  ip = ip.split('.');
  ip_a = ip[0];
  ip_b = String(ip[1]).padStart(3, '0');
  ip_c = String(ip[2]).padStart(3, '0');
  ip_d = String(ip[3]).padStart(3, '0');
  ip = `${ip_a}.${ip_b}.${ip_c}.${ip_d}`
  return ip;
}

