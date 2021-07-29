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

var Blocks=[];

var gun,gun_;

function preload() {
    bg_=loadImage("./assets/world/bg.png");
    player_=loadImage("./assets/player/right.png");
    gun_=loadImage("./assets/items/blasterG.png");
}
function setup() {
    //--Canvas
    createCanvas(windowWidth-20,windowHeight-20);

    //--Matter.js setup

    engine = Engine.create();
	world = engine.world;

    Engine.run(engine);

    //--

    //--Ground🌏
    ground=Matter.Bodies.rectangle(width/2,height-50,width,100,{
        isStatic:true,
        restitution:1.2,
        density:10000,
    });
    World.add(world,ground);
    //--

    //--Player
    player=Matter.Bodies.rectangle(100,height/2,80,80,{
        restitution:0,
        density:100,
        mass:10
    });
    World.add(world,player);

    player$=createSprite(100,200,64,64);
    player$.addAnimation("player",player_);
    player$.scale=1.25;
    //--

    //--Blocks🟥... Also see "classes/block.js"
    for(var i=0;i<4;i++) {
        var somethingmaybe=new block(random(100,width-(width*(1/4))),random(height*1/4,height*3/4),random(20,70),20);
        Blocks.push(somethingmaybe);
    }
    //--

    //--Gun🔫 Bam!Bam!💥💥
    gun=createSprite(200,200,20,20);
    gun.addAnimation("gun",gun_);
    gun.scale=0.5;
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
    
    //Arrow moves➡⬅⬆⬇
    if(keyDown("right")&&player.position.x<width-20) {
        Matter.Body.applyForce(player,{x:0,y:0},{x:0.05,y:0});
    }
    if(keyDown("left")) {
        Matter.Body.applyForce(player,{x:0,y:0},{x:-0.05,y:0});
    }
    if(keyDown("up")&&player.position.y>=height/2) {
        Matter.Body.applyForce(player,{x:0,y:0},{x:0,y:-0.09});
    }
    //--

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
    /*if(player.position.y>=ground.position.y-100) {
        player.position.y=ground.position.y-90;
    }*/
    //--

    //--Block displays
    for(var j=0;j<Blocks.length;j++) {
        Blocks[j].display();
    }
    //--

    //--Gun position
    gun.position.x=player$.position.x+50;
    gun.position.y=player$.position.y-5;
    //--

}