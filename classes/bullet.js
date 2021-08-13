class Bullet{
    constructor(x,y) {
        this.x=x;
        this.y=y;

        this.body=Bodies.rectangle(this.x,this.y,20,20,{
            isStatic:true
        });
        World.add(world,this.body);

        //this.sprite=createSprite(this.x,this.y,20,20);
    }
    display() {
        let pos=this.body.position;

        //this.sprite.position.x=pos.x;
        //this.sprite.position.y=pos.y;

        rect(pos.x,pos.y,20,20);
    }
    shoot(angle) {
        var velocity = p5.Vector.fromAngle(angle);
        velocity.mult(25);
        Matter.Body.setStatic(this.body, false);
        //Matter.Body.applyForce(this.body, {x:0,y:0} ,{ x: velocity.x, y: velocity.y });
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});
    }
}