var bg,bgIMG;
var ground;
var player,playerIMG,obstacle,obstacleIMG;
var ObstaclesGroup;
function preload(){
    bgIMG = loadImage("Track.png");
    playerIMG = loadImage("player.png");
    obstacleIMG = loadImage("Obstacle.png");
}
function setup(){
    createCanvas(800, 700);
    bg = createSprite(0,550,200,700);
    bg.addImage("Track.png",bgIMG);
    bg.scale = 2;
    bg.velocityX = -2;
    bg.x=bg.width/2;

    player = createSprite(100,600);
    player.addImage("player.png",playerIMG);
    player.scale = 0.3;
    player.debug = true;

    ground = createSprite(400,685,800,20);
    ground.shapeColor = "white";

    ObstaclesGroup = createGroup();
}
function draw() {
    console.log(player.y);
    spawnObstacles();
    player.collide(ground);
    if (bg.x<0){
        bg.x = bg.width/2;
    }
    bg.velocityX = -4;
    player.velocityY = player.velocityY + 0.8;
    if(keyDown("space") && player.y >= 600){
        player.velocityY = -18 ;
      }
      if(isTouching(player,ObstaclesGroup)){
        player.velocityY = 0;
        player.velocityX = 0;
        ObstaclesGroup.setVelocityXEach(0);
      }
    drawSprites();
}
function spawnObstacles() {
    if(World.frameCount % 80 === 0) {
      obstacle = createSprite(800,630,40,40);
      obstacle.addImage("Obstalce.png",obstacleIMG);
      obstacle.debug = true;
      obstacle.velocityX = -10      
      obstacle.scale = 0.2;
      obstacle.lifetime = 150;
      ObstaclesGroup.add(obstacle);
    }
  }
  function isTouching(object1,object2){
    if(object1.x - object2.x < object2.width/2 + object2.width/2 
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){

    }
  }