
class Node {
  Node [] children;
  int n_children;
  
  Node(int max_children) {
    children = new Node[max_children]; 
    n_children = 0;
  }
  
  boolean new_child() {
    if (n_children < children.length) {
      children[n_children] = new Node(children.length);
      n_children++;
      return true;
    } else return false;
  }
  
  boolean attach_child(Node new_child) {
    if (new_child == null) return false;
    
    if (n_children < children.length) {
      children[n_children] = new_child;
      n_children++;
      return true;
    } else return false;
  }
}

void draw_tree(Node tree, float branch_size, float openness) {
  line(0, 0, 0, -branch_size);
  circle(0, -branch_size, branch_size/4);
  translate(0, -branch_size);
  for (int i=0; i<tree.n_children; i++) {
    pushMatrix();
    rotate(TWO_PI/16 + -i*openness / (float)tree.n_children);
    if (tree.children[i] != null) 
      draw_tree(tree.children[i], branch_size*0.8, openness*0.7);
    popMatrix();
  }
}


Node create_tree(int total_nodes, int max_children) {
  if (total_nodes<=0) return null;
  int total;
  Node n = new Node(max_children);
  
  int h = 1;
  
  int m = total_nodes-1;
  int p = m/max_children;
  int p0 = m-p;
  
  n.attach_child(create_tree(p, 2));
  n.attach_child(create_tree(p0, 2));
  
  return n;
}

void setup() {
  size(500,500);
  stroke(20);
  strokeWeight(2);

//  noLoop();
  frameRate(100); 
}

int n = 1;
void draw() {
  background(255);
  Node no = create_tree(n, 2);
  translate(250, 450);
  draw_tree(no, 90, TWO_PI/3);
  //saveFrame("frames/####.png");
  n++;
  if (n>100) noLoop();
  
}
