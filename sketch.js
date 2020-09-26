var bg,bgIMG;
var ground;
var player,playerIMG,obstacle,obstacleIMG;
var ObstaclesGroup;
function preload(){
    bgIMG = loadImage("Track.png");
    playerIMG = loadImage("player.png");
    obstacleIMG = loadImage("rock.png");
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
    player.setCollider("circle",200,200,30);

    ground = createSprite(400,685,800,20);
    ground.shapeColor = "white";

    ObstaclesGroup = createGroup();
}
function draw() {
    console.log(player.y);
    player.collide(ground);
    player.collide(ObstaclesGroup);
    if (bg.x<0){
        bg.x = bg.width/2;
    }
    bg.velocityX = -4;
    player.velocityY = player.velocityY + 0.8;
    if(keyDown("space") && player.y >= 600){
        player.velocityY = -18 ;
      }
    spawnObstacles();
    drawSprites();
}
function spawnObstacles() {
    if(World.frameCount % 80 === 0) {
      obstacle = createSprite(800,630,10,40);
      obstacle.addImage("rock.png",obstacleIMG);
      obstacle.velocityX = - (6 + 3/100);      
      obstacle.scale = 0.2;
      obstacle.lifetime = 150;
      ObstaclesGroup.add(obstacle);
    }
  }