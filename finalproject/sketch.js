/*

	Sound sampler v 1

*/

var galaxyImage; //background image
var cyberSound; //space sound

var x = 0;
var y = 100;
var s = 100; // speed
var xSpeed = 4;
var ySpeed = 4;
var c; // color

var count = 0;

var earthImage; //moving earth


var title = 'Welcome to Space'; // Title
var description = 'Hit Space to play music, enter to pause music'; //Description

function preload() {
	galaxyImage = loadImage("galaxy.jpg");
	cyberSound = loadSound("Cyberspace.mp3");
	earthImage = loadImage('earth.png');

}

function setup() {
	createCanvas (960, 600);
	cyberSound.playMode("restart");

	var r = random(0);
	var g = random(255);
	var b = random(255);
	c = color(r, g, b);
}

function draw() {
	background(galaxyImage);

	textSize(70);
	fill('white');
	stroke('black');
	strokeWeight(4);
	textFont('Impact');
	textAlign(CENTER, BOTTOM);

	var len = title.length; //length of title
	var n = map(mouseX, 0, width, 0, len); //number of characters to show

	text(title.substring(0,n), width / 2, height / 2);


	var titleWidth = textWidth (title);

	textSize(20);
	fill('white');
	stroke('black');
	strokeWeight(1);
	textFont('impact');
	textLeading(mouseY);
	text(description, width / 2 - titleWidth / 2, height / 2 + 30, titleWidth);

	image(earthImage, x, y, s, s);

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

function keyPressed() {
		if (keyCode == 32) { //Space key
			cyberSound.play();
		} 

		if (keyCode == 13) { //Enter key
			cyberSound.pause();
		} 

	}