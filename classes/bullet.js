class Bullet{
    constructor(x,y) {
        this.x=x;
        this.y=y;

        this.body=Bodies.rectangle(this.x,this.y,20,20,{
            isStatic:true
        });
        World.add(world,this.body);

        this.sprite=createSprite(this.x,this.y,20,20);
    }
    display() {
        pos=this.body.position;

        this.sprite.position.x=pos.x;
        this.sprite.position.y=pos.y;
    }
    shoot(angle) {
        angle.mult(20);

        Body.setStatic(this.body,false);
        Body.applyForce(this.body, {x: angle.x, y: angle.y})
    }
}