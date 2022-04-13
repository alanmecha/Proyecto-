
var balon;


function setup() {
  createCanvas(400,400);

balon=createSprite(200,200,20,20);
}

function draw() 
{
  background("white");

  if (keydown("up")) {
  balon.y=balon.y+1;
  }

  if (keydown("down")) {
  balon.y=balon.y-1;
  }

  if (keydown("left")) {
  balon.x=balon.x-1;
  }

  if (keydown("right")) {
  balon.x=balon.x+1;
  }
  drawSprites();
;
}




