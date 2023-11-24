let w = 10;
let rez = 0.001;
let amount = 1000;
let color1 = '#FDFDFD'//'#264653' //'#073b4c'//'#9b2226' 
let t = 0; // Time variable for animation
let isAnimating = true; // Boolean variable to control animation

function setup() {
  createCanvas(700, 700);
  frameRate(20); // Increase the frame rate for smoother animation
  background('#034AFF');
}

function draw() {
  noStroke();

  if (isAnimating) {
    // Increase the time variable with a smaller step for smoother animation
    t += 0.001; // Adjust this value as needed for the desired speed

    let amount = 1000 + 500 * sin(t); // You can modify this formula for different effects


    // Clear the canvas
    background('#034AFF');

    // Call the function to draw the animated elements
    makeDistortedDots(amount, color1, rez);
  }
}

function makeDistortedDots(amount, color, rez) {
  leeway = 1000;
  for (i = -leeway; i < width + leeway; i += w) {
    for (j = -leeway; j < height + leeway; j += w) {
      fill(color);
      circle(
        i + (noise(i * rez, j * rez) * amount) - (amount / 2) + (noise(i * rez, j * rez) * amount) - (amount / 2), j + (noise(i * rez, j * rez) * amount) - (amount / 2) + (noise(i * rez, j * rez) * amount) - (amount / 2), 2
      );
    }
  }
}

