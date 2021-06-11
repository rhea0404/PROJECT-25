
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;
var gameState;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	gameState = "start";

	engine = Engine.create();
	world = engine.world;
	

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperObject= new paper(100,600,10);

	Engine.run(engine);
	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(230);
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("red");
    text("Press Up Arrow to Start, and Up to throw away the trash.", 50, 200)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbinObj.display();

  }

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:10,y:-15});

	}
}