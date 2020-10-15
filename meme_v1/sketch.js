/* 
meme

*/

var title = 'I did not get fired!';
var description = 'Im a liar, a thief, and a fat looser. As far as the bridge, YES I knew about it. Im a liar, a thief, and a fat looser. As far as the bridge, I knew about it. Im a liar, a thief, and a fat looser. As far as the bridge, I knew about it. Im a liar, a thief, and a fat looser. As far as the bridge, I knew about it. Im a liar, a thief, and a fat looser. As far as the bridge, I knew about it.';


function preload(){
	govchristie = loadImage('gov_christie.jpg');

}

function setup () {
	createCanvas (640,360);

}

function draw() {
	background(220);



	/* image */
	image(govchristie, 0, 0, width, height);



	textSize(70);
	fill('crimson');
	stroke('white');
	strokeWeight(4);
	textFont('Merriweather');
	textStyle(ITALIC);
	textAlign(CENTER, BOTTOM);

	var len = title.length; //length of title
	var n = map(mouseX, 0, width, 0, len); //number of characters to show

	text(title.substring(0,n), width / 2, height / 2);


	var titleWidth = textWidth (title);


	textSize(18);
	fill('white');
	stroke('crimson');
	strokeWeight(1);
	textFont('Helvetica');
	textLeading(mouseY);
	text(description, width / 2 - titleWidth / 2, height / 2 + 30, titleWidth);


}