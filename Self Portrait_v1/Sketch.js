/*

	Self portrait v1
	by Christian Noa

*/



function setup() {
	createCanvas(720, 420);

}

function draw() {
	background('red');

	// face
	noStroke();
	fill("white");
	square(225, 80, 250);

	//eyebrows
	stroke("#000000"); //black
	strokeWeight(5);
	line(275, 100, 310, 125); //left

	// eyes
	stroke("#000000");	//black
	strokeWeight(7);
	circle(300, 175, 50); //left
	circle(400, 175, 50); //right
	circle(300, 175, 75); //left
	circle(400, 175, 75); //right

	fill("#000000"); //black
	circle(300, 175, 50); //left
	circle(400, 175, 50); //right
	
	fill("white"); //white
	circle(300, 175, 25); //left
	circle(400, 175, 25); //right

	//mouth
	strokeWeight(5);
	line(400, 260, 300, 250);
}