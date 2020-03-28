function setup() {
  createCanvas(displayWidth-500,displayHeight-700);
 
}

function draw() {
  background("white");
  var spaceship = createSprite(100,50,50, 50);
  if(keyDown(RIGHT_ARROW)){
    spaceship.velocityX=5;
  }
  drawSprites();
}