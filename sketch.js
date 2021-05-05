
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;
var constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  bobDiameter = 40;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new Bob(540, 740, 0.5);
	bobObject2 = new Bob(560, 740, 0.5);
	bobObject3 = new Bob(580, 740, 0.5);
	bobObject4 = new Bob(600, 740, 0.5);
	bobObject5 = new Bob(620, 740, 0.5);

	roofObject = new Roof(20, 50, 1700, 30);

	rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0)
	rope2 = new Rope(bobObject2.body, roofObject.body, -bobDiameter*2, 0)
	rope3 = new Rope(bobObject3.body, roofObject.body, -bobDiameter*2, 0)
	rope4 = new Rope(bobObject4.body, roofObject.body, -bobDiameter*2, 0)
	rope5 = new Rope(bobObject5.body, roofObject.body, -bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("coral");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  if(keyDown(UP_ARROW)){
 restitution : 0.3
  }

  
  drawSprites();
 
}



