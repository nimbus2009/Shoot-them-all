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
        restitution:0,
        density:10000,
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

    //--Player movement
    
    //Arrow moves
    if(keyDown("right")&&player.position.x<width-20) {
        Matter.Body.applyForce(player,{x:0,y:0},{x:0.0009,y:0});
    }
    if(keyDown("left")) {
        Matter.Body.applyForce(player,{x:0,y:0},{x:-0.0009,y:0});
    }
    if(keyDown("up")) {
        Matter.Body.applyForce(player,{x:0,y:0},{x:0,y:-0.02});
    }

    //Keeping the player in the world
    if(player.position.x>=width) {
        player.position.x=width;
    }
    if(player.position.x<=0) {
        player.position.x=0;
    }
    if(player.position.y<=0) {
        player.position.y=0;
    }
}