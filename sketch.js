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

var player,player_,player$;

function preload() {
    bg_=loadImage("./assets/world/bg.png");
    player_=loadImage("./assets/player/right.png");
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

    //--Player
    player=Matter.Bodies.rectangle(100,height/2,64,64);
    World.add(world,player);

    player$=createSprite(100,200,64,64);
    player$.addAnimation("player",player_);
    //--
}
function draw() {
    background(220);

    Engine.update(engine);

    imageMode(CENTER)

    //--Background
    image(bg_,width/2,height/2,width,height);

    //--Ground display
    fill("#F5D11F")
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,width,100);
    //--

    //--Player display
    player$.position.x=player.position.x;
    player$.position.y=player.position.y;
    //--

    drawSprites();
}