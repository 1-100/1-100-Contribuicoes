let contador = 1;
let foto;
let foto_espelhada;

function preload() {
  foto = loadImage("foto.jpg");
}

function setup() {
  createCanvas(500, 500);
  foto_espelhada = createGraphics(500, 500);
  foto_pedaco = foto.get(0, 0, width/2, height);
  foto_espelhada.image(foto_pedaco, 0, 0);
  foto_espelhada.translate(width, 0);
  foto_espelhada.scale(-1, 1);
  foto_espelhada.image(foto_pedaco, 0, 0);
  imageMode(CENTER);
  frameRate(5);
}

function draw() {
  background(0);
  translate(width/2, height/2);

  if( contador == 1 ) {
    push();
    beginClip();
    circle(0, 0, width * 0.9);
    endClip();
    image(foto_espelhada, 0,0);
    pop();
  }

  if( contador > 1 ) {
    let t = TWO_PI / contador;
    let t_inicial = HALF_PI - t/2;
    let t_final = t_inicial +  t;
    for(let i = 0; i < contador; i++) {
      push();
      rotate(i * t);
      beginClip();
      arc(0, 0, width * 0.9, height * 0.9, t_inicial, t_final);
      endClip();

      image(foto_espelhada, 0,0);
      pop();
    }
    
  }
  
  save(contador + '.jpg');
  contador++;
  
  if(contador > 100) {
    noLoop();
  }
}