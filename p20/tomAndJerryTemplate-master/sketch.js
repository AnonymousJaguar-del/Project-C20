var tom, tomImage, tomRunning, tomLost;
var jerry, jerryImage, jerryTeasing, jerryWinking;
var background, backgroundImage;

function preload() {
    //load the images here
    tomImage=loadImage("images/cat1.png");
    jerryImage=loadImage("images/mouse1.png");
    backgroundImage=loadImage("images/garden.png");
    tomRunning=loadAnimation("images/cat2.png", "images/cat3.png");
    jerryTeasing=loadAnimation("images/mouse3.png", "images/mouse2.png");
    jerryWinking=loadImage("images/mouse4.png");
    tomLost=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    background=createSprite(300, 300);
    background.addImage(backgroundImage);
    background.scale = 1

    tom=createSprite(600, 500, 2, 2);
    tom.addImage(tomImage);
    tom.scale = 0.15;

    jerry=createSprite(120, 510, 2, 2);
    jerry.addImage(jerryImage);
    jerry.scale = 0.1;

    tom.addImage("tomLost", tomLost);
    jerry.addImage("jerryWinking", jerryWinking);
}

function keyPressed(){
  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
      tom.velocityX=-3;
      tom.addAnimation("tomRunning", tomRunning);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("jerryTeasing", jerryTeasing);
      jerry.changeAnimation("jerryTeasing");
  }

}

function draw() {
    //Write condition here to evalute if tom and jerry collide
    tom.debug = true;
    if (tom.x-jerry.x<(tom.width + jerry.width)/2) {
        tom.velocityX=0;
        tom.changeImage("tomLost");
        jerry.changeImage("jerryWinking");
    }

    drawSprites();
}