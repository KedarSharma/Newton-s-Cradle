class Slingshot {
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY

        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x : this.offsetX, y : this.offsetY}
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            strokeWeight(5);
            stroke("yellow");
            line(pointA.x,pointA.y,pointB.x + this.offsetX,pointB.y+this.offsetY);
        }
    }
}