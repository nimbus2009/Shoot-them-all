var ghosts=[];
var ghost;

function spawnGhost(x,y) {
    ghost=createSprite(x,y,30,30);
    ghost.addAnimation("ghost",ghost_);
    ghost.velocityX=-0.5;

    ghost.lifetime=1000;
}