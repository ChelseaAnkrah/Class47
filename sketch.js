var groundImage
var cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat1Image
var puddles, puddlesImage
function preload() {
  groundImage = loadImage("forest.png");
  cat1Image = loadAnimation("cat3.png", "cat4.png", "cat5.png", "cat6.png", "cat7.png", "cat9.png", "cat10.png", "cat11.png", "cat12.png");
  puddlesImage = loadImage("puddle_prev_ui.png");
}

function setup() {
  createCanvas(800, 400);
  ground = createSprite(400, 50, 800, 50);
  ground.addImage(groundImage);
  ground.velocityX = -2
  ground.scale = 2


  cat1 = createSprite(70, 350);
  cat1.addAnimation("cat", cat1Image);
  cat1.scale = 0.3

  puddles = createSprite(200, 350);
  puddles.addImage(puddlesImage);
  puddles.skin = 2

}

function draw() {
  background(0);

  if (ground.x < 0) {
    ground.x = 400
  }

  spawnpuddles()

  drawSprites();
}

function spawnpuddles() {
  if (frameCount % 200 === 0){
    puddles = createSprite(400,245);
    puddles.velocityX = -5;
    
    puddles.addImage(puddlesImage);
  }
}