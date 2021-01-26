var movingRect, fixedRect



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50); 
  fixedRect.shapeColor = "white"
  movingRect = createSprite(200,100,50,50);
  movingRect.shapeColor = "red"
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.y-fixedRect.y);
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor = "yellow"
    fixedRect.shapeColor = "orange"
  }
  else{
    fixedRect.shapeColor = "white"
    movingRect.shapeColor = "red"

  }
  drawSprites();
}
