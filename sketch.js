let salut = 0; // Initialize salut variable outside the draw function

function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(112, salut, 160); //an RGB color for the canvas' background
  //circle
  stroke(255, 255, 127); // an RGB color for the circle's border
  strokeWeight(3);
  fill(mouseX, 255, 255, 127, 150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width), random(height), 25, 25); // center of canvas, 20px dia
  fill(17, 1, 169);
  rect(mouseX - 25, mouseY - 250, 300, 50);
  fill(255, 255, 255);
  stroke(28, 190, 247);
  textSize(salut);
  textFont('Garamond');
  text('Hello', 230, 280);
  line(50, salut, 450, salut);
}

function mousePressed() {
  if (salut >= 100) {
    salut = 0;
  } else {
    salut = salut + 5;
  }
}

