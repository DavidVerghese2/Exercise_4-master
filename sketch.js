function setup(){
 createCanvas(354, 332);
 background(228, 219, 188, 50);   // how come you can't run setup without running draw??

}

function draw(){




//circles

} 




function draw(){

/*  print("mouseX is");
println(mouseX);

print("mouseY is");
println(mouseY); */


noStroke();
 fill(190, 183, 190, 150);
ellipse(55*2, 125*2, 130, 130); //inner circle
  
 noStroke();
 fill(134, 177, 184, 200);
ellipse(55*2, 125*2, 105, 105); // second outer circle

stroke(5);
fill(232, 182, 60);
ellipse(55*2, 125*2, 80, 80); // inner circle

//lines (left to right)

line(115, 70, 354, 10); 
line(210, 60, 280, 0); 

// circle behind the checkerboard

fill(255);
ellipse(142.5*2, 90*2, 105, 90);

// black rectangle
beginShape();
fill(0);
vertex(72.5*2, 180);
vertex(77.5*2, 170);
vertex(354, 260);
vertex(354, 280);
endShape(CLOSE);


//checkerboard pattern, left to right, bottom up
//clockwise from bottom left

beginShape(); //1
fill(149, 94, 36); 
vertex(137*2, 112*2);
vertex(147*2, 80*2);
vertex(170*2, 100*2);
vertex(155*2, 120*2);
endShape(CLOSE);

beginShape(); //2
fill(255);
vertex(147*2, 80*2);
vertex(152.5*2, 67.5*2);
vertex(179*2, 85*2);
vertex(170*2, 100*2);
endShape(CLOSE);

beginShape(); //3
fill(112, 138, 68);
vertex(152.5*2, 67.5*2);
vertex(160*2, 55*2);
vertex(177.5*2, 65*2);
vertex(179*2, 85*2);
endShape(CLOSE);

beginShape(); //4
fill(255);
vertex(160*2, 55*2);
vertex(167.5*2, 40*2);
vertex(177.5*2, 45*2);
vertex(177.5*2, 65*2);
endShape(CLOSE);

beginShape(); //5
fill(0);
vertex(167.5*2, 40*2);
vertex(354, 17.5*2);
vertex(177.5*2, 45*2);
endShape(CLOSE);

beginShape(); //6
fill(213, 233, 214);
vertex(155*2, 120*2);
vertex(170*2, 100*2);
vertex(177.5*2, 110*2);
vertex(160*2, 122.5*2);
endShape(CLOSE);

beginShape(); //7
fill(0);
vertex(170*2, 100*2);
vertex(354, 90*2);
vertex(177.5*2, 110*2);
endShape(CLOSE);

beginShape(); //8
fill(255);
vertex(160*2, 122.5*2);
vertex(177.5*2, 110*2);
vertex(354, 122.5*2);
vertex(172.5*2, 127.5*2);
endShape(CLOSE);

beginShape(); //9
fill(162, 163, 107);
vertex(172.5*2, 127.5*2);
vertex(354, 122.5*2);
vertex(354, 130*2);
endShape(CLOSE);

//arcs

noFill();
arc(105*2, 35*2, 100, 110, 0, PI);  // counter clockwise


noFill();
arc(306, 60, 100, 50, 0, PI);  

}