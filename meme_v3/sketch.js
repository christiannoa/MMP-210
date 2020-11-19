/*

meme_v3

*/

var x = 0;
var y = 100;
var s = 100; // speed
var xSpeed = 4;
var ySpeed = 4;
var c; // color

var count = 0;

var cotfImage;

function preload() {
	cotfImage = loadImage('cotf.png');
}

function setup() {
	createCanvas (640,640);
	noStroke();
	imageMode(CENTER);

	var r = random(0);
	var g = random(255);
	var b = random(255);
	c = color(r, g, b);
}

function draw() {
	background(220);

	image(cotfImage, x, y, s, s);

	fill(c);
	textSize(s/4);
	textAlign(CENTER, CENTER);
	textStyle(BOLDITALIC);
	text("COTF", x, y);

	count++;
	if (count == 30) {
		s = random(100,200);
		count = 0;
	}

	x += xSpeed;
	y += ySpeed;

	//hits right or left side of canvas
	if (x > width || x < 0) {
		//reverse speed
		xSpeed *= -1;
		var r = random(0);
		var g = random(255);
		var b = random(255);
		c = color(r, g, b);
	}

	//hits top or bottom side of canvas
	if (y > height || y < 0) {
		//reverse speed
		ySpeed *= -1;
		var r = random(0);
		var g = random(255);
		var b = random(255);
		c = color(r, g, b);
	}

}