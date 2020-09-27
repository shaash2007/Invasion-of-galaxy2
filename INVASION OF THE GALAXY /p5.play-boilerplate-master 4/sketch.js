var player
var Edges
var HQgrp
var crawl
var lasergrp
var HQhit=false
var HQlaser=0
var HQbomb=0
function preload(){
playerImg=loadImage("images/player.png")
backgroundImg=loadImage("images/background.png")
bombImg=loadImage("images/bomb.png")
laserImg=loadImage("images/laser.png")
HQImg=loadImage("images/HQ.png")
crawlImg=loadImage("images/crawl.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
bg=createSprite(displayWidth/2, displayHeight/2)
bg.addImage(backgroundImg)
bg.scale=4
player=createSprite(400, 200, 50, 50);
player.addImage(playerImg)
lasergrp=new Group()
HQgrp=new Group()
}

function draw() {
 background(0,0,0);
 Edges=createEdgeSprites()
 player.collide(Edges[1])
 player.collide(Edges[0])
 player.collide(Edges[2])
 player.collide(Edges[3])
if (keyIsDown(UP_ARROW)){
  player.y=player.y-5
}
if (keyIsDown(DOWN_ARROW)){
  player.y=player.y+5
}
if (keyIsDown(RIGHT_ARROW)){
 generateBullet()
}
if (keyIsDown(LEFT_ARROW)){
  generateBomb()
 }
 /*if(HQ.isTouching(laser)){
   if(HQhit===false&&HQlaser<3){
    HQlaser=HQlaser+1
   }
  
  }*/
 if (frameCount%200===0)
 generateHQ()
 if (frameCount%500===0)
 generateCrawl()
 if(HQgrp.isTouching(lasergrp)){
   console.log("crash")
 }
  drawSprites();
}
function generateBullet(){
  var laserSpawn=createSprite(350,200)
  laserSpawn.addImage(laserImg)
laserSpawn.scale=0.5
laserSpawn.y=player.y
laserSpawn.x=player.x
laserSpawn.velocityX=+5
lasergrp.add(laserSpawn)
}
function generateBomb(){
  bomb=createSprite(400,200)
bomb.addImage(bombImg)
bomb.scale=0.3
bomb.y=player.y
bomb.x=player.x
bomb.velocityX=+5
}
function generateHQ(){
  var HQ=createSprite(displayWidth,random(0,displayHeight))
  HQ.addImage(HQImg)
  HQ.velocityX=-2
  HQgrp.add(HQ)
}

function generateCrawl(){
  crawl=createSprite(displayWidth,random(0,displayHeight))
  crawl.addImage(crawlImg)
  crawl.velocityX=-2
}
  
function keyPressed(){
  console.log("entering x")
  if((keyCode==120)){
  laserSpawn.velocityX=+5  
  }
}
function keyPressed(){
  console.log("entering x")
  if((keyCode==120)){
  bomb.velocityX=+5  
  }


}
