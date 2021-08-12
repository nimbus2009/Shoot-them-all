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

var player,player_,player$,_player;
let pDirection='r';

var Blocks=[];

var gun,gun_,_gun,gun$;

let angle=0;

var gear,gear$,gear_;
let gDirection='d';

var bat_;

var the;

var bullets=[];
var ghosts=[];
var bats=[];

function preload() {
    bg_=loadImage("./assets/world/bg.png");
    player_=loadImage("./assets/player/right.png");
    gun_=loadImage("./assets/items/blasterG.png");
    _player=loadImage("./assets/player/left.png");
    _gun=loadImage("./assets/items/blasterGG.png");
    gear_=loadAnimation("./assets/enemies/spinner.png","./assets/enemies/spinner_spin.png");
    ghost_=loadImage("./assets/enemies/ghost.png");
    bat_=loadAnimation("./assets/enemies/bat_fly.png","./assets/enemies/bat.png");
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
    ground=Matter.Bodies.rectangle(width/2,height-50,width*2,100,{
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
    player$.scale=1.25;
    //--

    //--Blocks🟥... Also see "classes/block.js"
    for(var i=0;i<4;i++) {
        var somethingmaybe=new block(random(100,width-(width*(1/4))),random(height*1/4,height*3/4),random(20,30),20);
        Blocks.push(somethingmaybe);
    }
    //--

    //--Gun🔫 Bam!Bam!💥💥
    gun=createSprite(200,200,20,20);
    gun.scale=0.5;

    gun$=Bodies.rectangle(200,200,50,20,{
        isStatic:true
    });
    World.add(world,gun$);
    //--

    //--Gear
    gear=Bodies.circle(width*(3/4),height-200,50,{
        isStatic:true
    });
    World.add(world,gear);

    gear$=createSprite(gear.position.x,gear.position.y,20,20);
    gear$.addAnimation("gear",gear_);
    //--
}
function draw() {
    background(220);

    Engine.update(engine);

    imageMode(CENTER)

    //--Background
    image(bg_,width/2,height/2,width,height);

    //--Ground display
    fill("#800000")
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,width,100);
    //--

    //--Player display
    player$.position.x=player.position.x-5;
    player$.position.y=player.position.y;
    //--

    drawSprites();

    //--Player movement
    
    //Arrow moves➡⬅⬆⬇
    if(keyDown("right")&&player.position.x<width-20) {
        Matter.Body.applyForce(player,{x:0,y:0},{x:0.05,y:0});
        pDirection='r';
    }
    if(keyDown("left")) {
        Matter.Body.applyForce(player,{x:0,y:0},{x:-0.05,y:0});
        pDirection='l';
    }
    if(keyDown("a")&&player.position.y>=height/2) {
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

    //--Gun position(on y-axis)
    //For x-axis see "Player animation"
    gun.position.y=player$.position.y-5;
    //--

    //--Gun angle settings
    gun.rotation=angle;
    gun.angle=angle;
    gun$.angle=angle;
    //--

    //--Player animation
    if(pDirection=='r') {
        player$.addAnimation("player",player_);
        gun.addAnimation("gun",gun_);
        gun.position.x=player$.position.x+70;

            //--Gun rotation on letter presses
        if(keyDown('up')&&angle>-90) {
            angle-=0.5
        }
        if(keyDown('down')&&angle<90) {
            angle+=0.5
        }
        //--
    }
    if(pDirection=='l') {
        player$.addAnimation("player",_player);
        gun.addAnimation("gun",_gun);
        gun.position.x=player$.position.x-70;

            //--Gun rotation on letter presses
        if(keyDown('down')&&angle>-90) {
            angle-=0.5
        }
        if(keyDown('up')&&angle<90) {
            angle+=0.5
        }
        //--
    }
    //--

    //--Gear movement
    gear$.position.y=gear.position.y;

    if(gDirection=='t') {
        gear.position.y-=1.5;
    }
    if(gDirection=='d') {
        gear.position.y+=2;
    }

    if(gear.position.y>=height-150) {
        gDirection='t';
    }
    if(gear.position.y<=50) {
        gDirection='d';
    }
    //--

    //--Ghost spawning
    if(frameCount%Math.round(random(200,500))==0) {
        spawnGhost(width,Math.round(random(100,height-300)));
    }
    //--

    //--Bat spawning
    if(frameCount%Math.round(random(500,800))==0) {
        spawnBat(width,Math.round(random(100,height-300)));
    }
    //--

    fill("#676e6a");
    push();
    translate(gun$.position.x, gun$.position.y);
    rotate(angle);
    rect(0, 0, 50, 20);
    pop();

    for(var c=0;c<bullets.length;c++) {
        bullets[c].display();
    }

}

function keyPressed() {
    if(keyCode==32) {
        the=new Bullet(gun.position.x,gun.position.y);
        bullets.push(the);
    }
}

function keyReleased() {
    if(keyCode==32) {
        the.shoot(gun$.angle);
        if(bullets.length>1) {
            World.remove(world,bullets[0].body);
            bullets.shift();
        }
    }
}