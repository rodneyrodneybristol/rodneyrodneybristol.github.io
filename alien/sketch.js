let button;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;
let button10;
let button11;
let button12;
let button13;
let button14;
let button15;
let button16;

let timer=0;

let myFont;

function preload() {
  myFont = loadFont('PressStart2P-Regular.ttf');
}

function setup() {
  createCanvas(500, 300);
  background(0);
  
  //button.position(0, 0);
  //button.mousePressed(changeBG);
}

function draw() {
  //timer =0;
 
  square(timer, 275, 25);
    fill(0,123,6);
 
  if (frameCount % 15==0){
    timer+=25;
  }
  
  
   
  if (timer>375){
    background(0);
    timer=0;
  }
  
  
  
  
  textFont(myFont);
  textSize(36);
  text('The Alien', 10, 50);
  textSize(24);
  text('Now Loading', 20, 270);
  
}

function changeBG() {
  let val = random(255);
  background(val);
}

