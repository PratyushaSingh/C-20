var movingRect, fixedRect



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 100, 50, 50); 
  fixedRect.shapeColor = "white"
  fixedRect.velocityY = 5;
  movingRect = createSprite(200,200,50,50);
  movingRect.shapeColor = "red"
  movingRect.velocityY = -5;
}

function draw() {
  background(0);  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  console.log(movingRect.y-fixedRect.y);
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.velocityX = movingRect.velocityX*(-1);
    fixedRect.velocityX = fixedRect.velocityX*(-1);
  }
  if(fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2){
    movingRect.velocityY = movingRect.velocityY*(-1);
    fixedRect.velocityY = fixedRect.velocityY*(-1);

  }
  drawSprites();

  
}