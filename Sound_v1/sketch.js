/*

	Sound sampler v 1

*/

var relaxSound;
var miamiImage;
var welcomeImage;

function preload () {
	relaxSound = loadSound('vibe.mp3');
	welcomeImage = loadImage('welcome.png');
	miamiImage = loadImage('miami.jpg');


}

function setup() {
	createCanvas (960,600);
	relaxSound.playMode('restart');

}

function draw() {
	background(welcomeImage);

	if (relaxSound.isPlaying()) {
		background(miamiImage);
	}

}

function keyPressed() {
		if (keyCode == 32) { //Space key
			relaxSound.play();
		} 

		if (keyCode == 13) { //Enter key
			relaxSound.pause();
		} 

	}