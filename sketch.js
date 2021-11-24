const Engine = Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var mySnow = []
var bg
function preload () {
  bg=loadImage("snow1.jpg")
}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg);  
  Engine.update(engine);
  //drawSprites();
  if(frameCount%5===0){
    mySnow.push(new Snow())
  }
  //mySnow=new Snow()
  //mySnow.display()
 for(var i=0;i<mySnow.length;i++){
   mySnow[i].display()
 }
}