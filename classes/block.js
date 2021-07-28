class block {
    constructor(x,y,width,height) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,{
            isStatic:true
        });
        World.add(world,this.body);
    }
    display(color) {

        if(color!==null&&color!==undefined) {
            this.color=color;
            fill(this.color);
        }
        else {
            fill("red");
        }

        //rectMode(CENTER);
        rect(this.x,this.y,this.width+25,this.height);
    }
}