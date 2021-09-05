var bg, tom1, tom2, tom3, mouse1, mouse2, mouse3, tom, jerry;
function preload() {

    bg = loadImage("images/garden.png")
    //tom1 - loadAnimation("images/cat1.png")
    tom1 - loadImage("images/cat1.png")
    tom2 - loadAnimation("images/cat2.png","images/cat2.png")
    tom3 - loadAnimation("images/cat4.png")

    mouse1 - loadAnimation("images/mouse1.png")
    mouse2 - loadAnimation("images/mouse2.png","images/mouse2.png")
    mouse3 - loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(900,600)
    tom.addImage("sleeping", tom1)
    //tom.addAnimation("awake", tom2)
    //tom.addAnimation("caught", tom3)
    tom.scale = 0.2
    jerry = createSprite(200,600)
   //jerry.addAnimation("sleeping", mouse1)
    //jerry.addAnimation("awake", mouse2)
    //jerry.addAnimation("caught", mouse3)
    jerry.scale = 0.5
}

function draw() {

    background(bg);
    if (tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        //tom.changeAnimation("caught")
        //jerry.changeAnimation("caught")
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW) {
      tom.velocityX = -5;
      //tom.changeAnimation("awake", tom2)
      jerry.frameDelay = 25
      //jerry.changeAnimation("awake")
  }


}
