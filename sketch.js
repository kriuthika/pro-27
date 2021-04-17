
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bobObject1 = new bob(320,575,40)
	bobObject2 = new bob(360,575,40)
	bobObject3 = new bob(400,575,40)
	bobObject4 = new bob(440,575,40)
	bobObject5 = new bob(480,575,40)



	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);


  roofObject.display();

 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


}






