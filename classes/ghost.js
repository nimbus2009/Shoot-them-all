var ghosts=[];

class Ghost{
    constructor(x,y) {
        this.x=x;
        this.y=y;

        this.img=loadImage("assets/enemies/g.png");

        this.ghostbody=Bodies.rectangle(this.x,this.y,53,73,{
            isStatic:true
        });
        World.add(world,this.ghostbody);
    }
    display() {
        var pos=this.ghostbody.position;

        image(this.img,pos.x,pos.y,51,73);
    }
}

function spawnGhost(x,y) {
    var someghost=new Ghost(x,y);
    ghosts.push(someghost);
}

function displayGhosts() {
    for(var i=0;i<ghosts.length;i++) {
        ghosts[i].display();
    }
}