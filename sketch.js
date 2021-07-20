//--Matter.js setup prelimnary

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//--

var world,engine;

var bg,bg_;

var ground;

function preload() {
    bg_=loadImage("./assets/world/bg.png");
}
function setup() {
    //--Canvas
    createCanvas(windowWidth-20,windowHeight-20);

    //--Matter.js setup

    engine = Engine.create();
	world = engine.world;

    Engine.run(engine);

    //--

    //--Ground
    ground=Matter.Bodies.rectangle(width/2,height-50,width,100,{
        isStatic:true,
    });
    World.add(world,ground);
    //--
}
function draw() {
    background(220);

    Engine.update(engine);

    drawSprites();

    imageMode(CENTER)

    //--Background
    image(bg_,width/2,height/2,width,height);

    //--Ground display
    fill("#F5D11F")
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,width,100);
    //--
}