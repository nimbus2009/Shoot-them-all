var bats=[];
var bat;

function spawnBat(x,y) {
    bat=createSprite(x,y,30,30);
    bat.addAnimation("bat",bat_);
    bat.velocityX=-1;

    bat.lifetime=9000;
}