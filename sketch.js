var bullet;
var wall,thickness;
var speed,weight;
var damage;

function setup() {
  createCanvas(1600,800);
  bullet = createSprite(200, 400, 60, 20);
  bullet.shapeColor="white"
  wall = createSprite(1200,400,thickness,height/2)
  thickness = random(22,83)
  speed = random(223,321);
  weight = random(20,52)
  bullet.velocityX = speed;
}

function draw() {
  background("black");  
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0
  }

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(damage >10){
    wall.shapeColor = "red"
  }
  if(damage < 10){
    wall.shapeColor = "green"
  }

  drawSprites();
}