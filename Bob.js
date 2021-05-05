class Bob{
    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        } 
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 0.5;
        World.add(world, this.body);
    }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            ellipseMode(CENTER);
            stroke("blackk");
            strokeWeight(5);
            fill("purple");  
            ellipse(pos.x, pos.y, this.radius);
            pop();
        }
}

   