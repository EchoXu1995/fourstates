var x1=150,y1=400,x2=450,y2=400,x3=740,y3=400,x4=1050,y4=400;
  
function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(0);
  stroke(0);
  ellipse(x1,y1,50,50);
  ellipse(x2,y2,50,50);
  ellipse(x3,y3,50,50);
  ellipse(x4,y4,50,50);
  
  if ( mouseX >= x4-25 && mouseX <= x4 + 25 &&
    mouseY >= y4-25 && mouseY <= y4 + 25) {
    x4 += random(-5, 5);
    y4 += random(-5, 5);
    if(x4>=1200||x4<=900||y4>=600||y4<=100){
      x4=1050;
      y4=400;
    }
        
  }
  if ( mouseX >= x2-25 && mouseX <= x2 + 25 &&
    mouseY >= y2-25 && mouseY <= y2 + 25) {
    x2 += random(-50, 50);
    y2 += random(-50, 50);
    if(x2>=600||x2<=300||y2>=600||y2<=100){
      x2=450;
      y2=400;
    }
  }
  if ( mouseX >= x3-70 && mouseX <= x3 + 70 &&
    mouseY >= y3-70 && mouseY <= y3 + 70) {
    x3 = mouseX;
    y3 = mouseY;
    if(x3>=900||x3<=600||y3>=600||y3<=100){
      x3=740;
      y3=400;
    }
  }
  
}
