var bats=[];
var bat;

function spawnBat(x,y) {
    bat=createSprite(x,y,30,30);
    bat.addAnimation("bat",bat_);
    bat.velocityX=-0.5;

    bat.lifetime=1000;
}