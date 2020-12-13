
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var paper, box;
var ground;

function setup() {
	createCanvas(1300, 700);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
  ground = new Ground(750,650,1500,20)
  paper = new Paper(100,100,10,10)
  

  box=new Dustbin(1180,520,10,50)
  //box2 = new Dustbin(860,595,20,90)
  //box3 = new Dustbin(980,630,200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  


  
  ground.display();
  paper.display();
  box.display();
  //box2.display();
  //box3.display();
  
  //keyPressed();
  drawSprites();
  
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:6,y:-6})
  }
  

}


