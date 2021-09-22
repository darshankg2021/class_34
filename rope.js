class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            lenght: 350
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.rope);
    }

    attach(body){
        this.rope.bodyA = body;
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;

            push();
            stroke("brown");
            strokeWeight(10);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}