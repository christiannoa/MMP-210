/* 
meme

*/

var title = 'COTF';
var description = 'comrade of the future amet, consectetur adipiscing elit. Nunc dignissim scelerisque dui,at scelerisque turpis egestas ac. Vestibulum malesuada nisl tellus, aliquet mollis lectus rutrum non. Pellentesque ornare, lorem ac pretium tempor, nulla purus auctor quam, sit amet porttitor ligula quam ut mi. Nulla sit amet fermentum leo. Duis ornare hendrerit justo. Aenean ultrices ligula nec pharetra tincidunt. Fusce pellentesque diam id fermentum posuere. Maecenas eget velit vitae lorem congue iaculis eget dignissim sem. Donec eleifend convallis ipsum, mattis accumsan lacus blandit at. Cras vitae justo sit amet dui pretium aliquet rhoncus a purus. Maecenas lacus erat, interdum ut luctus sed, maximus in dolor. Nulla nec rutrum arcu.';


function setup () {
	createCanvas (640,360);

}

function draw() {
	background(220);

	textSize(75);
	fill('crimson');
	stroke('black');
	strokeWeight(4);
	textFont('Merriweather');
	textStyle(ITALIC);
	textAlign(CENTER, BOTTOM);

	var len = title.length; //length of title
	var n = map(mouseX, 0, width, 0, len); //number of characters to show

	text(title.substring(0,n), width / 2, height / 2);


	var titleWidth = textWidth (title);


	textSize(16);
	fill('black');
	noStroke();
	textFont('Helvetica');
	textLeading(mouseY);
	text(description, width / 2 - titleWidth / 2, height / 2 + 10, titleWidth);


}