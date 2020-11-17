var car, wall 
var speed
var weight
var deformation



function setup() {
  createCanvas(1600,400);
  car = createSprite(0, 150, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = (80,80,80)
}

function draw() {
  background(255,255,255);  
  
  
if(car.isTouching(wall)){
   deformation=0.5*weight*speed*speed/22500;

   car.velocityX = 0;
   car.x = 1000;
   car.y = 200;


}

if(deformation < 100){
  car.shapeColor = "green"
}
else if(deformation > 100 && deformation < 180){
  car.shapeColor = "yellow"
}
else if(deformation > 180){
  car.shapeColor = "red"

}

fill("black")
text("deformation :  "+ deformation,600,200)
  drawSprites();
}