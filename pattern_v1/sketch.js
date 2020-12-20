/*

Pattern Version 1
Javascript loops

*/

function setup() {
	createCanvas(640, 320);
	rectMode(CENTER);

}

function draw() {
	background('DeepSkyBlue');

	//Sun
	for (let x = 25; x < width; x+= 700) {
		fill('yellow')
		noStroke();
		ellipse(x, 0, 75);
	}

	//Clouds
	let y = 75;
	for (let x = 25; x < width; x+= 140) {
		fill('white')
		noStroke();

		ellipse(x, y, 50);
		ellipse(x + 25, y, 50);
		ellipse(x + 50, y, 50);

		y-= 10;
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