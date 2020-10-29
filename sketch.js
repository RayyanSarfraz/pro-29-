const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hex1

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
    world = engine.world;

  hex1 = new Ball(700, 320, 70, 70);


}

function draw() {

 hex1.display();

  background(255, 255, 255);
  drawSprites();
}