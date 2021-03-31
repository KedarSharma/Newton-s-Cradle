class Ball {
    constructor(x,y){
        var options = {
            'restitution':1,
            'friction':0,
            'density':7.8,
            'isStatic' : false
        }
        this.body = Bodies.circle(x, y,25,options);
        this.radius = 25;
        World.add(world,this.body);
    }
    display(color){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);   
        rectMode(CENTER);    
        fill(color);
        circle(0, 0, this.radius*2);
        pop(); 
    }
}