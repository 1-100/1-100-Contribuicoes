/******************
Code by Vamoss
Original code link:
https://openprocessing.org/sketch/1241518

Author links:
http://vamoss.com.br
http://twitter.com/vamoss
http://github.com/vamoss
******************/

//Códigos Arcturianos – Ascensão
//ref: https://arcturianos.com.br/wp-content/uploads/2017/06/Ascen%C3%A7%C3%A3o.jpg
//This is a investigation trying to recreate the amazing  geometry present on the Arcturians codes.
//This code is  used to generate their sacred geometries.
//They say that just by seeing these symbols, you can reach high levels of meaning and awareness, in this case Ascension.

let Ω = 5;
const autoExport = false;

let centerX, centerY, radius, renderer;
let innerCircles, outterCircles, innerPentagon;

function setup() {
	renderer = createCanvas(500, 500);
	centerX = width/2;
	centerY = height/2;
	radius = min(width, height) * 0.35;

  if(autoExport){
    Ω = 1;
    frameRate(5);
  }else{
    noLoop();
  }
  initGrid();
}

function initGrid() {	
	//fix mobile matrix, it start with a non identity matrix
	//renderer.drawingContext.resetTransform();
	
	innerCircles = []
	push();
	rotate(1/(Ω*2)*TWO_PI);
	for(let i=0; i<Ω; i++){
		innerCircles.push(getAbsPoint({x:0, y:-radius*0.7}));
		rotate(1/Ω*TWO_PI);
	}
	pop();
	
	outterCircles = []
	push();
	for(let i=0; i<Ω; i++){
		outterCircles.push(getAbsPoint({x:0, y:-radius*0.88}));
		rotate(1/Ω*TWO_PI);
	}
	pop();
	
	
	innerPentagon = []
	for(let i=0; i<Ω; i++){
		innerPentagon.push(
			getIntersectionPoint(
				outterCircles[i].x, outterCircles[i].y, innerCircles[(i+2)%Ω].x, innerCircles[(i+2)%Ω].y,
				outterCircles[(i+4)%Ω].x, outterCircles[(i+4)%Ω].y, outterCircles[(i+1)%Ω].x, outterCircles[(i+1)%Ω].y
			)
		);
		
		innerPentagon.push(
			getIntersectionPoint(
				outterCircles[i].x, outterCircles[i].y, innerCircles[(i+2)%Ω].x, innerCircles[(i+2)%Ω].y,
				innerCircles[(i+1)%Ω].x, innerCircles[(i+1)%Ω].y, innerCircles[(i+3)%Ω].x, innerCircles[(i+3)%Ω].y
			)
		);
	}
}

function draw() {
	background(255);
	
	push();
	translate(centerX, centerY);
	
	//bg circle
	push();
	noFill();
	strokeWeight(1);
	stroke(150);
	for(let i=0; i<Ω*5; i++){
		rotate(1/(Ω*5)*TWO_PI);
		ellipse(0, radius/2, radius, radius);
	}
	pop();
	
	//connections outter circle
	noFill();
	stroke(50);
	strokeWeight(1);
	for(let i = 0; i<Ω; i++){
		let connect1 = outterCircles[(i+2)%Ω];
		let connect2 = innerCircles[(i+1)%Ω];
		let connect3 = innerCircles[(i+2)%Ω];
		let connect4 = innerCircles[(i+3)%Ω];
		line(outterCircles[i].x, outterCircles[i].y, connect1.x, connect1.y);
		line(outterCircles[i].x, outterCircles[i].y, connect2.x, connect2.y);
		line(outterCircles[i].x, outterCircles[i].y, connect3.x, connect3.y);
		line(outterCircles[i].x, outterCircles[i].y, connect4.x, connect4.y);
	}
	
	//connections inner circle
	noFill();
	stroke(75);
	for(let i = 0; i<Ω; i++){
		let connect1 = innerCircles[(i+2)%Ω];
		let connect2 = innerCircles[(i+3)%Ω];
		line(innerCircles[i].x, innerCircles[i].y, connect1.x, connect1.y);
		line(innerCircles[i].x, innerCircles[i].y, connect2.x, connect2.y);
	}
	
	//inner circle
	fill(75);
	noStroke();
	for(pos of innerCircles){
		ellipse(pos.x, pos.y, radius/10, radius/10);
	}
	
	//outter circle
	fill(100);
	noStroke();
	for(pos of outterCircles){
		ellipse(pos.x, pos.y, radius/20, radius/20);
	}
	
	//outter circles
	push();
	fill(100);
	noStroke();
	for(let i=0; i<Ω; i++){
		const t = 10;
		for(let j=0; j<t; j++){
			let angle = j/t*TWO_PI/Ω+PI/2;
			let x = cos(angle) * radius;
			let y = sin(angle) * radius;
			let size = cos(j/t*PI+PI/2)*radius/20*1.2;
			ellipse(x, y, size, size);
		}
		rotate(1/Ω*TWO_PI);
	}
	pop();
	
	//outter circles
	push();
	fill(150);
	noStroke();
	for(let i=0; i<Ω; i++){
		const t = 22;
		for(let j=0; j<t; j++){
			let angle = (j/t*(TWO_PI/Ω*0.6)-PI/2)+0.2;
			let x = cos(angle) * radius * 1.1;
			let y = sin(angle) * radius * 1.1;
			let size = cos(j/t*PI+PI/2)*radius/30;
			ellipse(x, y, size, size);
		}
		rotate(1/Ω*TWO_PI);
	}
	pop();
	
	//inner pentagon
	noFill();
	stroke(150);
	strokeWeight(3);
	for(let i=0; i<innerPentagon.length; i++){
		line(innerPentagon[i].x, innerPentagon[i].y, innerPentagon[(i+4)%innerPentagon.length].x, innerPentagon[(i+4)%innerPentagon.length].y);
	}
	
	//inner circles on pentagon
	fill(100);
	noStroke();
	for(pos of innerPentagon){
		ellipse(pos.x, pos.y, radius/20, radius/20);
	}
	
	pop();//translate(centerX, centerY);

  if(autoExport && Ω <= 100){
    saveCanvas(renderer, 'vamoss-' + pad(Ω, 3), 'jpg');
    Ω++;
    initGrid();
  }
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

function mousePressed() {
	Ω = (Ω+1)%100;
	initGrid();
	draw();
}

function getAbsPoint(point) {
	if(renderer.drawingContext.getTransform) {
		var matrix = renderer.drawingContext.getTransform();
		return {
			x:matrix.a * point.x + matrix.c * point.y + matrix.e,
			y:matrix.b * point.x + matrix.d * point.y + matrix.f
		};
	}else{
		var matrix = renderer.drawingContext.mozCurrentTransform;
		return {
			x:matrix[0] * point.x + matrix[2] * point.y + matrix[4],
			y:matrix[1] * point.x + matrix[3] * point.y + matrix[5]
		};
	}
}

function getIntersectionPoint(line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY) {
    // if the lines intersect, the result contains the x and y of the intersection (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
    let denominator = ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - ((line2EndX - line2StartX) * (line1EndY - line1StartY));
    if (denominator == 0) return {x:0, y:0};
    let a = line1StartY - line2StartY;
    let b = line1StartX - line2StartX;
    let numerator = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
    let c = numerator / denominator;

    // if we cast these lines infinitely in both directions, they intersect here:
    return {
			x: line1StartX + (c * (line1EndX - line1StartX)),
     	y: line1StartY + (c * (line1EndY - line1StartY))
		};
}