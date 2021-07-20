const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine;

var bg,bg_;

function preload() {
    bg_=loadImage("./assets/world/bg.png");
}
function setup() {
    createCanvas(windowWidth-20,windowHeight-20);

    //--Matter.js setup

    engine = Engine.create();
	world = engine.world;

    Engine.run(engine);

    //--
}
function draw() {
    background(220);

    Engine.update(engine);

    drawSprites();

    imageMode(CENTER)

    //--Background
    image(bg_,width/2,height/2,width,height)
}