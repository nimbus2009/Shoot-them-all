const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine;

function preload() {

}
function setup() {
    createCanvas(windowWidth-20,windowHeight-20);

    engine = Engine.create();
	world = engine.world;

    Engine.run(engine);
}
function draw() {
    background(220);

    Engine.update(engine);
}