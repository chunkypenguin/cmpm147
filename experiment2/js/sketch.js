// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;
var centerHorz, centerVert;

/* exported setup, draw */
let seed = 0;
let hillColor = "#a29825";
let mountainColor = "#3a7291";
let bgMountainColor = "#68889f";
let skyColor = "#98b1c5";
let sunColor = "#d6d599";
let flowerColor = "#ce9813"
let flowerColorTwo = "#8c460b"
let flowerColorThree = "#b0987e"
let cloudColor = "#c3cacb"

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

function resizeScreen() {
  centerHorz = canvasContainer.width() / 2; // Adjusted for drawing logic
  centerVert = canvasContainer.height() / 2; // Adjusted for drawing logic
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  // redrawCanvas(); // Redraw everything based on new size
}

// setup() function is called once when the program starts
function setup() {
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  // resize canvas is the page is resized

  // create an instance of the class
  myInstance = new MyClass("VALUE1", "VALUE2");

  $(window).resize(function() {
    resizeScreen();
  });
  resizeScreen();
  
    /* global clicker */
    $("#clicker").click(generate);
  
    generate();
}

function generate() {
  seed++
}

function draw() {
  randomSeed(seed);

  background(skyColor);

  drawSun();
  
  drawClouds();

  drawBGMountains();

  drawMountains();

  drawHills();
  
  function drawMountains() {
    noStroke();
    fill(mountainColor); // Brown color for mountains

    beginShape();
    let xoff = 0;
    for (let x = 0; x <= width + 100; x += 55) {
      let y = map(noise(xoff), 0.6, 0.4 * random(), height / 5, height / 5 + 150);
      vertex(x, y);
      xoff += 0.15;
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  }

  function drawBGMountains() {
    noStroke();
    fill(bgMountainColor); // Brown color for mountains

    beginShape();
    let bgxoff = 0;
    for (let x = 0; x <= width + 100; x += 70) {
      let y = map(noise(bgxoff), 0.4, 0.3 * random(), height / 3, height / 7 + 25);
      vertex(x, y);
      bgxoff += 0.15;
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  }

  function drawHills() {
    noStroke();
    fill(hillColor); // Brown color for mountains

    beginShape();
    let hillxoff = 1;
    for (let x = 0; x <= width + 100; x += 175) {
      let y = map(noise(hillxoff), 0.8, 0.75 * (random() * random() * random()), height / 3, height / 3 + 250);
      vertex(x, y);
      hillxoff += 0.25;
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  }
  
    function drawClouds() {
      const scrub = mouseX / width;
    fill(cloudColor);
    for (let i = 0; i < 5; i++) { // Generate 5 clouds
      let x = width * ((random() + (scrub / 200 + millis() / 500000.0) / random()) % 1);
      let y = random(height / 4); // Random y-coordinate within upper third of canvas
      drawCloud(x, y); // Call a function to draw the cloud
    }
  }

  function drawSun() {
    const scrub = mouseX / width;
    fill(sunColor); // yellow color for the sun
    let x = width * ((random() + (scrub / 500 + millis() / 500000.0) / random()) % 1);
    ellipse(x, 50 * random() * random(), 40 * random() + 100); // position the sun above the mountains
  }
  
  //flowers
  for (let i = 0; i < 25; i++) { // Generate 10 flowers (you can adjust the number)
    const scrub = mouseX / width;
    let x = width * ((random() + (scrub / 50 + millis() / 500000.0) / random()) % 1); // Random x-coordinate within canvas width
    let y = random(240, height); // Random y-coordinate within lower part of canvas
    drawFlower(x, y); // Call a function to draw the flower
  }

}

function drawFlower(x, y) {
  push(); // Save the current transformation state
  translate(x, y); // Translate to the specified position
  fill(random([flowerColor, flowerColorTwo, flowerColorThree])); // Set fill color
  noStroke(); // No stroke
  let c = 6 * random();
  let u = 6 * random();
  let w = 6 * random();
  let h = 40 * random();
  for (let i = 0; i < 10; i++) { // Draw flower shape
    ellipse(c, u, w, h); // Randomize ellipse size
    rotate(PI / 5); // Rotate for petal shape
  }
  pop(); // Restore the previous transformation state
}

function drawCloud(x, y) {
  noStroke();
  ellipse(x, y, 20 * random() + 60, 20 * random() + 40); // Draw main cloud body
  ellipse(x, y + 10 * random() + 20, 20 * random() + 40, 20 * random() + 30); // Draw smaller cloud body beneath
  ellipse(x - 10 * random() - 20, y + 10 * random() + 10, 20 * random() + 40, 20 * random() + 30); // Draw smaller cloud body
  ellipse(x + 10 * random() + 20, y + 10 * random() + 10, 20 * random() + 40, 20 * random() + 30); // Draw smaller cloud body
  ellipse(x - 10 * random() - 40, y + 10 * random() + 10, 10 * random() + 20, 10 * random() + 20);
  ellipse(x + 10 * random() + 40, y + 10 * random() + 10, 10 * random() + 20, 10 * random() + 20); // Draw smaller cloud body
  //ellipse(x, y - 10, 30, 20); // Draw smaller cloud body
}


// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}