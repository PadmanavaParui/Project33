const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const  Bodies = Matter.Bodies;

var PLAY = 0;
var END = 1;
var particles = [];
var plinkos = [];
var divisions =  [];
var divisionHeight=300;
var score = 0;
var counter = 0;

// creating and initializing the gameState variable
var gameState = 0;

// the setup function
function setup() {
  // creating the canvas
  createCanvas(800, 800);
  // creating hte engine
  engine = Engine.create();
  // creating the world
  world = engine.world;

  // creating the ground
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var j = 75; j <=width; j=j+50) 
  {    
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {  
     plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) 
  {  
     plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {  
    plinkos.push(new Plinko(j,375));
  }
}
 
// the draw function
function draw() {
  // setting the background colour
  background("black");
  // setting the text size
  fill("yellow");
  textSize(20)
  text("Score : "+score,20,30);

//  the updating the engnie
  Engine.update(engine);
 
  if(gameState === 0) {
   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
     counter+=1;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  //  changing the gameState to end
   if(counter == 5){
     gameState = 1;
   }
}

// what will happen if the gameState is END
if(gameState === END){
  textSize(35);
  fill("red");
  text("HIGHScore : "+score, 300, 400);
  textSize(30);
  fill("green");
  text("NO of attempts:"+counter, 300, 450);
}
}

// the mouse pressed function
// this is to create particle on mouse click