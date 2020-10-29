/* 
meme V2

*/

var christieImage, gusteauImage;

function preload(){
	christieImage = loadImage("gov_christie.jpg");
	gusteauImage = loadImage("auguste_gusteau.jpg");

}

function setup() {
	createCanvas (640,640);
	textAlign(CENTER, CENTER);
	textFont ('Helvetica');
	textSize(60);

}

function draw() {
	background(255);

	if (mouseIsPressed) {
		image(christieImage, -100, 0);
		fill ("white");
		text("Food!", 500, 200);
	} else {
		image(gusteauImage, -50, -75);
		fill ("red");
		text("I Like", width / 5, 200);
	}
}