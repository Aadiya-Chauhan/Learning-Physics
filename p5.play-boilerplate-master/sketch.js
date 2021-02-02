/*three objects created in Matter.js
these objects are a part of Matter library, they are referenced as Matter.World, Matter.Engine and Matter.Bodies.
rename them as World, Engine and Bodies so that it is easy to write and read our code. This is called namespacing in programming.
● Engine is used to create the physics engine.
● World is used to create the physical world and add objects to it
● Bodies is used to create the physical objects which inhabit the world.*/

//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var canvas, box, engine, world;

function setup() {
  canvas = createCanvas(800,400);
  engine = Engine.create(); 
  world = engine.world;

  var ball = {
   restitution: 1.0 
  }
  box = Bodies.circle(100,100,50,ball);
  World.add(world,box);
  console.log(box);

  var groundO = {
   isStatic: true 
  }
  ground = Bodies.rectangle(400, 380, 800,25,groundO);
  World.add(world,ground);
}

function draw() {
  background("yellow");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,25); 
  ellipseMode(RADIUS);
  ellipse(box.position.x, box.position.y, 50, 50);
}