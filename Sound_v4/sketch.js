/*

	Custom Functions
	mouse interaction sound sampler

*/

var bgImage;
var jump, hithurt;

function preload() {
	bgImage = loadImage("bgimage.png"); //success vs Failure image
	jump = loadSound('jump.wav'); //success
	hithurt = loadSound('hithurt.wav'); //faiure
}


function setup() {
	createCanvas (640,640);

}

function draw() {
	background(bgImage);

	success(175, 600, 50, jump);
	failure(475, 600, 50, hithurt);

}

function mousePressed() {


}

//Left circle. Failure
function success(x, y, s, sound) {
	var d = dist(x, y, mouseX, mouseY);
	//calculate distance
	if (d < s / 2) {
		//inside the button
		fill('green');

		if (mouseIsPressed && !sound.isPlaying()) {
			sound.play();
		}
	} else {
		//outside the button
		fill('white');
	}

	ellipse(x, y, s);

}

//Right curcle. Failure
function failure(x, y, s, sound) {
	var d = dist(x, y, mouseX, mouseY);
	//calculate distance
	if (d < s / 2) {
		//inside the button
		fill('red');

		if (mouseIsPressed && !sound.isPlaying()) {
			sound.play();
		}
	} else {
		//outside the button
		fill('white');
	}

	ellipse(x, y, s);

}