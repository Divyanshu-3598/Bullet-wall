var bullet,wall;
var speed,weight;
var thickness;



function setup() {
  createCanvas(1000,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(900,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

}

function draw() {
  background(255,255,255); 
  wall.shapeColor=80,80,80;
  bullet.shapeColor=255,255,255;
  bullet.velocityX=speed;

  function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge= lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;

  }
  
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5* weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }

  }
  


  drawSprites();
}