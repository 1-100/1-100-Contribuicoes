function setup() {
  createCanvas(500, 500);
  background(255);
  frameRate(30);
  smooth();
  }



function draw() {
    //::ELLIPSE PB
  stroke(0, frameCount + 1);    
  strokeWeight (0.5);
  noFill();
  //ellipse(width / 2, frameCount + 175, frameCount % 100);
  ellipse(width / 2, frameCount + 175, frameCount % 20);

    //::ELLIPSE COR
  //fill(frameCount + 1,height % 100,0);    
  //noStroke();
  //ellipse(width / 2, frameCount + 175, frameCount % 100);
  //::TOPO
  //ellipse(height / 2, frameCount, frameCount % 100);

  
  //::CONTAGEM DE FRAMES
  //background(255);
  //fill(0);
  //text(frameCount, 20, 20);
  
  
  if (frameCount > 99){
    noLoop();
  }
  
}

