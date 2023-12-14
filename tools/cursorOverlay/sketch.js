// let bgimg;
function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
    // bgimg = loadImage('https://picsum.photos/400/400');
  }
  
  function draw() {
    clear();
    // image(bgimg, 0, 0, width, height);
    background(0,0);
    fill(121, 121, 121, 50);
    stroke(170, 170, 170, 50);
    ellipse(mouseX, mouseY, 50, 50);
  }
  

  