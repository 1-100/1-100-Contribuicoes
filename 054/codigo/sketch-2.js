let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;
let world;
let stones = [];
let boundaries  = [];

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  let boundary_weight = 20;
  boundaries.push(new Boundary(0, height/2, boundary_weight, height)); // Esquerda
  boundaries.push(new Boundary(width, height/2, boundary_weight, height)); // Direita
  boundaries.push(new Boundary(width/2, height, width, boundary_weight)); // Chão

  stone_new();
  noLoop();
}

function draw() {
  background(0);
  Engine.update(engine);

  // boundaries.forEach(b => {
  //   b.show();
  // });

  stones.forEach(s => {
    s.show();
  });

  if(bodies_stopped(stones) && bodies_inside(stones)) {
    saveCanvas(stones.length + ".jpg")
    stone_new();
  }

  if(stones.length > 100) {
    noLoop();
  }

}

function mousePressed() {
  noLoop();
}

function keyPressed() {
  loop();
}

class Boundary {
  constructor(x, y, w, h) {
    var options = {
      friction: 0.5,
      restitution: 0.95,
      isStatic: true
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    
    this.show = function () {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      fill(255, 0, 0);
      rect(0, 0, this.w, this.h);
      pop();
    };
  }
}

class Stone {
  constructor(x, y, r, sides) {
    let options = {
      friction: 0.2,
      restitution: 0.4
    };
    this.body = Bodies.fromVertices(x, y, stone_gen(r, sides), options);
    this.r = r;
    this.index = stones.length + 1;
    World.add(world, this.body);

    this.show = function () {
      let pos = this.body.position;
      let angle = this.body.angle;
      let vertices = this.body.vertices;
 
      fill(255);
      strokeWeight(2);
      stroke(0)
      beginShape();
      vertices.forEach(v => {
        vertex(v.x, v.y);
      })
      endShape(CLOSE);

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(0);
      noStroke();
      textStyle(BOLD);
      textSize(16);
      textAlign(CENTER, CENTER);
      text(this.index, 0, 0);
      pop();
    };
  }
}

function bodies_inside(bodies) {
  for(let i = 0; i < bodies.length; i++) {
    if(bodies[i].body.position.y < 0) {
      return false
    } 
  }
  return true;
}

function bodies_stopped(bodies) {

  for(let i = 0; i < bodies.length; i++) {
    if(bodies[i].body.speed > 0.5) {
      return false
    } 
  }
  return true;
}

function stone_new() {
  let x = random(50, width-50);
  let y = -200;
  let r = random(15, 26);
  let sides = floor(random(5, 15));
  stones.push(new Stone(x, y, r, sides));
}

function stone_gen(r, sides) {
  let t = 0;
  let vertexs = [];
  for(let i = 0; i < sides; i++) {

    let v_noise = noise(t) * 20;
    let x_new = sin(t) * r + v_noise;
    let y_new = cos(t) * r + v_noise ;

    let vertex_new = {
      x: x_new,
      y: y_new
    }
    vertexs.push(vertex_new);
    t+=TWO_PI/sides;
  }
  return vertexs;
}