var sea;
var ship;
var shipImg;
var seaImg;


function preload(){
  seaImg = loadImage("sea.png");
  //shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  shipImg = loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
 
  createCanvas(400,400); 

  sea = createSprite(200,200,40,40);
  sea.addImage(seaImg);
  sea.scale = 0.4;

  ship = createSprite(100,200,20,20);
  
  ship.addImage(shipImg);
  ship.scale = 0.2;
  
  
  
}

function draw() {
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  sea.velocityX = -4;
  
  drawSprites();
  
}






