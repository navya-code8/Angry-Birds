const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backGround;
var constraint;
var bird;

var PLAY = 0;
var END = 1;
var gameState = PLAY;

var score = 0;

function preload(){

  backGround = loadImage("sprites/bg.png")

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,400,1200,40)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,80,80);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(865,120,150, -PI/7);

    //log6 = new Log(120, 190, 100, PI/2)

    platform = new Ground(150,300, 350,220);


    bird = new Bird(200,50);
    constraint = new SlingShot (bird.body,{x: 200, y: 50});

}


function draw(){
  if(backGround){
    background(backGround);
  }
  Engine.update(engine);

   
  //  text(mouseX+", "+mouseY, mouseX, mouseY);
    ground.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    
  //  log6.display();

    platform.display();

    bird.display();

    constraint.display();

    //console.log(gameState);
    pig1.score();
    pig3.score();
    textSize(40)
    text("Score: "+score, 1000,50);

}

function mouseDragged(){
 if (gameState === PLAY){
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY})
  }
}

function mouseReleased(){

        constraint.fly();
        console.log("hi")
        gameState = END

}

async function bgChange(){
 
  var aPI = await fetch("http://worldclockapi.com/api/json/pst/now");
  var apiData = await aPI.json();
  var time = apiData.currentDateTime
  var hours = time.slice(11,13);
  console.log(hours);
  
  if (hours>7 && hours<20){

    backGround = loadImage("sprites/bg.png")

  }

  else{

    backGround = loadImage("sprites/BG_night.jpg")

  }

}

function keyPressed(){

  if (keyCode === 32 ){
    bird.body.speed = 0;
    bird.trajectory = [];


    console.log("display")

    Matter.Body.setPosition(bird.body, {x:200,y:50})
    
    
    constraint.attach(bird.body);
    gameState = PLAY;
    

    
    
  }

}

