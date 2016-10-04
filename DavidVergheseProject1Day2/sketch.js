// adjective is: "methodical"

//This code is supposed to represent the steps of the scientific method

function setup(){
  createCanvas (900, 600);
  
  textAlign(CENTER);
 
  stroke(102);
  frameRate(8);
  angleMode();
  
}

function draw(){
  
 background(0);
 question();
  drop();
  eureka();
  dissapointment();
     
}

function eureka(){

  if(keyIsPressed){
    background(200, 100, 50);
    
  textSize(40);
 text("Eureka!", 90, 80);
 textSize(100);
 
 push();
 fill(255);
 ellipse(300, 300, 100, 100 );
 pop();
 text("!", 300, 300);
  }
}

function dissapointment(){
  if (mouseIsPressed){
    background(50, 50, 50); 
    textSize(40);
 text("Sigh", 90, 80);
 textSize(100);
 ellipse (200, 100, 5, 5);
 ellipse (250, 100, 5, 5);
  curve(225, 150, 10, 10, 0, 180);
  }
}


function question(){
  for (y = 20; y <=height-20; y+=40){
    for (x = 20; x <=width; x+=40){
      fill(200, 200, 200);
      textSize(18+random(5));
     text("?", x, random(y)); 
    }}}
    
function drop(){
   for (var y = 570; y <=height-20; y+=5){
   for (var x = 20; x <=width; x+=10){
     ellipse(x, y+random(10), 2, 2);
   
}
}
}