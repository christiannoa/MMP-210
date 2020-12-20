/*

	Interaction 2 - collisions

*/

var r, g, b;
var defaultSound;

function preload()	{
	defaultSound = loadSound('default.wav');
}

function setup() {
	createCanvas (960, 600);
	r = random(255);
	g = random(255);
	b = random(255);
}

function mousePressed() {

	//click circle
	var d = dist(100, 100, mouseX, mouseY);
	if (d < 50) {
		//change the background color
		r = random(255);
		g = random(255);
		b = random(255);
		defaultSound.play();
	}

}

function draw() {
	background(r, g, b);

	//circle button
	fill('black');

	var d = dist(100, 100, mouseX, mouseY);
	if (d < 50) {
		fill('red');
	}

	ellipse(100, 100, 100);

}