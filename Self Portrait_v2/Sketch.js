/*

	Self portrait v2
	by Christian Noa

*/

//global scope
var x = 350; //character origin
var y = 225; //character origin
function setup() {
	createCanvas(720, 420);


}

function draw() {
	background('Grey');

	x = mouseX;
	y = mouseY;

	// face
	noStroke();
	fill("white");
	square(x - 125, y - 145, 250);

	//eyebrows
	stroke("#000000"); //black
	strokeWeight(5);
	line(x - 125, y - 125, x - 40, y - 100); //left

	// eyes
	stroke("#000000");	//black
	strokeWeight(7);
	circle(x - 50, y - 50, 50); //left
	circle(x + 50, y - 50, 50); //right
	circle(x - 50, y - 50, 75); //left
	circle(x + 50, y - 50, 75); //right

	fill("#000000"); //black
	circle(x - 50, y - 50, 50); //left
	circle(x + 50, y - 50, 50); //right
	
	fill("white"); //white
	circle(x - 50, y - 50, 25); //left
	circle(x + 50, y - 50, 25); //right

	//mouth
	strokeWeight(5);
	line(x + 50, y + 35, x-50, y + 25);


	// stroke('green');
	// circle(x, y, 5)


}