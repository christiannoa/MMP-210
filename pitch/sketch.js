/*
	final project pitch template
	title
	description
	theme
	interaction
	graphics
*/
function preload(){
	galaxy = loadImage('galaxy.jpg');
	earthImage = loadImage('earth.png');

}

var currentSlide = 1;
var totalSlides = 5;

var nextBtnX = 960 - 120;
var nextBtnY = 640 - 50;

var backBtnX = 20;
var backBtnY = nextBtnY;

var btnW = 100;
var btnH = 30;

var x = 0;
var y = 100;
var s = 100; // speed
var xSpeed = 4;
var ySpeed = 4;
var c; // color

var count = 0;

var earthImage;

function setup() {
	createCanvas(960, 640);

	var r = random(0);
	var g = random(255);
	var b = random(255);
	c = color(r, g, b);


}

function draw() {
	background('DeepSkyBlue');
	noStroke();
	
	// slides
	if (currentSlide == 1) {
		// title
		image(galaxy, 0, 0, width, height);
		textSize(80);
		fill(255);
		textAlign(CENTER, CENTER);

		// fill in your own title
		text('SPACE ADDICT', width/2, height/2 - 50);
		textSize(60);
		text('Landscape', width/2, height/2 + 50);
	
	} else if (currentSlide == 2) {
		// description, theme
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('My project is a generative landscape of space. I will be utilizing a few things I learned throughout the semester including interactivity, conditional logic, variables, external media, and functions and loops to create a galaxy with planets.', 50, 100, width - 100);

	} else if (currentSlide == 3) {
		// describe the interaction
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('User will use the keyboard and mouse to execute random patterns and pause and play music ', 50, 100, width - 100);
	
	} else if (currentSlide == 4) {
		// describe the graphics
		image(galaxy, 0, 0, width, height);
		textAlign(CENTER);
		fill(255);
		textSize(50);
		text('Interaction', 50, 100, width - 100);

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


	} else if (currentSlide == 5) {
		// describe the graphics
		image(galaxy, 0, 0, width, height);
		textAlign(CENTER);
		fill(255);
		textSize(50);
		text('Background Graphic Image', 50, 100, width - 100);

	}

	// draw buttons
	if (currentSlide < totalSlides) {
		button(nextBtnX, nextBtnY, "Next");
	}

	if (currentSlide > 1) {
		button(backBtnX, backBtnY, "Back");
	}
	
}

// displaying button
function button(x, y, displayText) {

	// draw buttons
	stroke('black');
	fill(255);
	
	if (mouseX > x && mouseX < x + btnW &&
		mouseY > y && mouseY < y + btnH) {
		fill('PowderBlue');

		if (mouseIsPressed) {
			stroke('PowderBlue');
		}
	}
	
	strokeWeight(4);
	rect(x, y, btnW, btnH, 10);

	noStroke();
	fill('dodgerBlue');
	textSize(25);
	textAlign(CENTER, CENTER);
	text(displayText, x, y, btnW, btnH);

}

function mousePressed() {
	// over the next button
	if (mouseX > nextBtnX && mouseX < nextBtnX + btnW &&
		mouseY > nextBtnY && mouseY < nextBtnY + btnH) {
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	// over the back button
	if (mouseX > backBtnX && mouseX < backBtnX + btnW &&
		mouseY > backBtnY && mouseY < backBtnY + btnH) {
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}

function keyPressed() {
	if (keyCode == 39) { // right arrow
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	if (keyCode == 37) { // left arrow
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}