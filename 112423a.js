let w = 3; // Width of grid cells
let rez = 0.001; // Perlin noise, lower more uniform
let amount = 500; // amount of distortion
let color1 = '#FAFAFA';
let color2 = '#034AFF';
let color3 = '#000';
let size = 2; // Size of circles to be drawn

function setup() {// Color of the distorted dots
  createCanvas(400, 600); // Create a canvas with a size of 700x700 pixels
  background(color2); // Set the background color
  noLoop()
}

function draw() { // Color of the distorted dots
  noStroke(); // No outline for shapes in this function

  // Call the function to draw the animated elements
  makeDistortedDots(amount, rez);
}

function makeDistortedDots(amount, rez) {
  leeway = 10; // Margin for grid
  let outerPadding = 100;

  // Loop through grid positions
  for (i = leeway; i < width - outerPadding; i += w) {
    for (j = leeway; j < height - outerPadding; j += w) {
      let fillNoFill = floor(random(2, 3));
      let strokeNoStroke = floor(random(3,4))

      if (fillNoFill === 1) {
        noFill(); // Set no fill for this circle
      } else if (fillNoFill === 2) {
        fill(color1); // Set fill for this circle
      } else {
        fill(color3);
      }
      
      if (strokeNoStroke === 1){
        stroke(color1)
      } else if (strokeNoStroke === 2){
        stroke(color3)
      } else {
        noStroke()
      }

      // Calculate positions with Perlin noise to create distortion
      circle(
        i + (noise(i * rez, j * rez) * amount) - (amount / 2) + (noise(i * rez, j * rez) * amount) - (amount / 2),
        j + (noise(i * rez, j * rez) * amount) - (amount / 2) + (noise(i * rez, j * rez) * amount) - (amount / 2),
        size // Set circle size
      );
      
      // Reset fill and stroke modes
      fill(255);
      noStroke();
    }
  }
}


function keyPressed() {
  if (key == ' ') redraw(); // If the spacebar is pressed, redraw the canvas
}
