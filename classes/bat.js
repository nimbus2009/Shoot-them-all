//var bats=[];
var bat;

function spawnBat(x,y) {
    bat=createSprite(x,y,30,30);
    bat.addAnimation("bat",bat_);
    bat.velocityX=-2;

    bat.lifetime=9000;

    bats.push(bat);
}