var pacman,ghost1,ghost2,ghost3,ghost4
var ghost1image,ghost2image,ghost3image,ghost4image
function preload(){
  pacmanimage=loadImage("images/pacman.png")
  backgroundimg=loadImage("images/Bg.png")
}

function setup() {
  createCanvas(1500,800)
  pacman=createSprite(100,600,50,50)
  pacman.addImage(pacmanimage)
  pacman.scale=0.1
  

}
function draw(){
  background(backgroundimg)
  //createEdgeSprites()
  //pacman.bounceOff(edges)
  pacman.setVelocity(0,0)
  
  if(keyDown("UP_ARROW")){
    pacman.velocityY=-2
  }
  if(keyDown("DOWN_ARROW")){
    pacman.velocityY=2
  }
  if(keyDown("RIGHT_ARROW")){
    pacman.velocityX=2
  }
  if(keyDown("LEFT_ARROW")){
    pacman.velocityX=-2
  }
  drawSprites()
}
