/*
    debug exercise
*/ 

var faceSize = "ONE HUNDRED" * 3;

function setup() {
    createCanvas(640, 480);

}

function draw() {
    background(50);
    noStroke();
    fill("lightblue");
    ellipse(350, 320, 300, 200); // face

    fill("red");
    ellipse (450, 250, 100); // right eye
    ellipse(50, 90, 100); // left eye
    ellipse(60, 20, 100, 100, 50); // mouth

    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont("monospace");
    text("Nice work!", 65, 110);
}
