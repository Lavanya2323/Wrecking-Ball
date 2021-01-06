class Rope{
    constructor(body1,point2){
        var option = {
            bodyA: body1,
            pointB: point2,
            stiffness: 1.2,
            length:300
        }
        this.pointB = point2
        this.rope = Constraint.create(option)
        World.add(world,this.rope)
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(7)
        stroke("grey")
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}