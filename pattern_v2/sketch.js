/*

Pattern Version 1
Javascript loops

*/

function setup() {
	createCanvas(640, 320);
	rectMode(CENTER);
	pattern();

}

function mousePressed() {
	pattern();
}

function pattern() {
	background('DeepSkyBlue');

	//Sun
	for (let x = 25; x < width; x+= 700) {
		fill('yellow')
		noStroke();
		ellipse(x, 0, 75);
	}

	//Clouds
	for (let x = 25; x < width; x+= random(100,140)) {
		fill('white')
		noStroke();

		let y = random(25,125);
		ellipse(x, y, 50);
		ellipse(x + 25, y, 50);
		ellipse(x + 50, y, 50);
	}

	//trees
	for (let x = 50; x < width; x+= 180) {
		fill('brown')
		noStroke();
		rect(x, height - 50, 15, 100);

		fill('green')
		ellipse(x, height - 100, 60, 80);
	}

	//grass
	for (let x = 0; x < width; x+= 25) {
		fill('green')
		noStroke();
		rect(x, 300, 50);
	}
}