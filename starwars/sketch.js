let graphics;
let graphics2;
let slider;
let xwing;

let death;

function preload() {
  death = loadModel('uploads_files_934677_ds.obj');
  xwing = loadModel('uploads_files_812075_X-Fighter.obj');
}


function setup() {
  createCanvas(500, 400 , WEBGL);
  //slider = createSlider(0, 255, 1);
  
  graphics = createGraphics(400,100);
  graphics.background(123);
  graphics.textSize(32);
  graphics.text('star wars star wars  star warst  star wars  \nstar wars star wars star wars \nstar wars star wars star wars', 10, 30);
  graphics.fill(0, 102, 153);
  
  
  
  graphics2 = createGraphics(400,400);
  graphics2.background(255);
}

function draw() {
  
  background(0);
  ambientLight(100);
  pointLight(255, 255, 255, 255, -50, 150);
  
 
   push();
  normalMaterial();
  texture(graphics);
  translate(-100,0,-50);
  rotateY(1.4);
  plane(400, 100);
  pop();
  
  
  push();
  normalMaterial();
  texture(graphics);
  translate(85,0,-50);
  rotateY(5);
  plane(400, 100);
  pop();
  
  
  
  push();
  normalMaterial();
  texture(graphics);
  translate(-30,100,-50);
  rotateY(0);
  rotateX(1.56);
  plane(400, 400);
  pop();
  
  push();
  specularMaterial(255);
  texture(graphics2);
  translate(50,0,0);
  rotateX(3);
  rotateY(frameCount * 0.01)
  graphics.fill(0,123,0);
  model(death);
  pop()
  
  
  push();
  specularMaterial(255);
  texture(graphics2);
  translate(-50,50,100);
  rotateX(3);
  rotateY(2.7);
  
  graphics.fill(0,123,0);
  scale(15);
  model(xwing);
  
  
  pop();
  
}


function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
