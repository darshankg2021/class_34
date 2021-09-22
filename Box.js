class Box{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.5,
            friction: 0.2,
            density: 0.4
        }        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        strokeWeight(3);
        stroke("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }    
}