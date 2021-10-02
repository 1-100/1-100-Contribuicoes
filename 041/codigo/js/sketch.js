let dados;
let nArtigos = 100;
let contador = 1;
function preload() {
  let url = "https://pt.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&rnlimit="+nArtigos+"&origin=*"
  httpGet(url, 'jsonp', false, (resposta) => {
    dados = resposta.query.random;
  }) 
  
}

function setup() {
  createCanvas(500,500);
  background(0);
  textAlign(TOP, LEFT);
  frameRate(5);
  textFont('General Sans');
  textWrap(WORD);
}

function draw() {
  textSize(40);
  fill(255);
  if (!dados) {
    // Wait until the earthquake data has loaded before drawing.
    return;
  }
  background(0);
  let titulo = dados[frameCount%nArtigos].title;
  text(titulo, 50, 50, 400, 400)
  // save(contador + ".jpg");
  if (contador == 100) {
    noLoop();
  }
  contador++;
}