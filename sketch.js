
var fixedRect, movingRect;
var gameObject1, gameObject2;
var rect1, rect2;
function setup() {
  createCanvas(1450,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  rect1 = createSprite(400,300,80,30)
  rect2 = createSprite(300,200,80,30)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect2)){
    movingRect.shapeColor = "orange";
    rect2.shapeColor = "orange";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    rect2.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

