
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(100,400,50);
ground = new Ground(400,740,800,30);
zone1 = new Zone(700,695,150,10);
	zone2 = new Zone(625,650,15,100);
	zone3 = new Zone(775,650,15,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  zone1.display();
 zone2.display();
 zone3.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
     Body.applyForce(paper.Body,paper.Body.position,{x:85,y:-125});
     
   }
 
   
   }

