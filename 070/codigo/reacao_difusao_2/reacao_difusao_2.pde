//Código adpatado de https://thecodingtrain.com/challenges/13-reaction-diffusion

Cell[][] grid = new Cell[500][500];
Cell[][] next = new Cell[500][500];
Cell[][] temp = new Cell[500][500];

float dA = 1;
float dB = 0.3;
float feed = 0.055;
float k = 0.062;
int steps_generations = 1;
int steps_counter = 0;
int steps_max = 2000;
int counter = 1;

void setup() {
  size(500, 500);
  init(counter);
}

void draw() {
  println(counter, steps_counter);
  background(0);
  for(int i = 0; i < steps_generations; i++) {
    update();
  }
  steps_counter++;
  
  if(steps_counter > steps_max){
    save(counter + ".png");
    counter++;
    steps_counter = 0;
    steps_max = floor(map(counter, 1, 100, 2000, 500));
    init(counter);
  }
  
  if (counter > 100) {
    noLoop();
  }
}

void update(){
  for (int x = 1; x < width - 1; x++) {
    for (int y = 1; y < height - 1; y++) {
      float a = grid[x][y].a;
      float b = grid[x][y].b;
      next[x][y].a = a +
        (dA * laplaceA(x, y)) -
        (a * b * b) +
        (feed * (1 - a));
      next[x][y].b = b +
        (dB * laplaceB(x, y)) +
        (a * b * b) -
        ((k + feed) * b);

      next[x][y].a = constrain(next[x][y].a, 0, 1);
      next[x][y].b = constrain(next[x][y].b, 0, 1);
    }
  }
  
  loadPixels();
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      int pix = (x + y * width);
      float a = next[x][y].a;
      float b = next[x][y].b;
      int c = floor((a - b) * 255);
      c = constrain(c, 0, 255);
      color pix_color = color(255 - c);
      pixels[pix] = pix_color;
    }
  }
  updatePixels();
  swap();
}



class Cell {
  float a;
  float b;
  
  Cell(float _a, float _b) {
    a = _a;
    b = _b;
  }
 
}

float laplaceA(int x, int y) {
  float sumA = 0;
  sumA += grid[x][y].a * -1;
  sumA += grid[x - 1][y].a * 0.2;
  sumA += grid[x + 1][y].a * 0.2;
  sumA += grid[x][y + 1].a * 0.2;
  sumA += grid[x][y - 1].a * 0.2;
  sumA += grid[x - 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y + 1].a * 0.05;
  sumA += grid[x - 1][y + 1].a * 0.05;
  return sumA;
}

float laplaceB(int x, int y) {
  float sumB = 0;
  sumB += grid[x][y].b * -1;
  sumB += grid[x - 1][y].b * 0.2;
  sumB += grid[x + 1][y].b * 0.2;
  sumB += grid[x][y + 1].b * 0.2;
  sumB += grid[x][y - 1].b * 0.2;
  sumB += grid[x - 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y + 1].b * 0.05;
  sumB += grid[x - 1][y + 1].b * 0.05;
  return sumB;
}

void swap() {
  temp = grid;
  grid = next;
  next = temp;
}

void start_grid(int qty) {
  float cell_size = width/qty;
  float nucleo_size = cell_size * 0.4;
  
  for(int j = 0; j < qty; j++){
    for(int i = 0; i < qty; i++){
      float x = i * cell_size + cell_size/2;
      float y = j * cell_size + cell_size/2;
      strokeWeight(nucleo_size);
      point(x, y);
    }
  }
}

void start_random(int qty) {
  
  float cell_size = width/(qty*2);
  float margin = cell_size * 0.5;
  for(int i = 0; i < qty; i++){
    float x = random(margin, width - margin);
    float y = random(margin, height - margin);
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(x, y, cell_size, cell_size);
  }
}


void start_circle(int qty) {

  float radius = width/4;
  float t_step = TWO_PI / qty;
  pushMatrix();
  translate(width/2, height/2);
  for(int i = 0; i < qty; i++){
    float x = radius * cos(t_step * i);
    float y = radius * sin(t_step * i);
    stroke(100);
    strokeWeight(4);
    point(x, y);
  }
  popMatrix();
}


void init(int qty){
  background(0);
  start_random(qty);
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      grid[x][y] = new Cell(1, 0);
      next[x][y] = new Cell(1, 0);
    }  
  }
  loadPixels();
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      int pix = (x + y * width);
      grid[x][y].b = map(red(pixels[pix]), 0, 255.0, 0, 1);
    }
  }
  updatePixels();
}
