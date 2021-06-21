class SlingShot{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:20
        }
        this.pointB = pointB
        this.SlingShot = Constraint.create(options);
        World.add(world,this.SlingShot);
    }

    attach(body){
        this.slingShot.bodyA = body;
        
    }
    fly(){
        this.SlingShot.bodyA = null;

    }
        display(){
            if(this.SlingShot.bodyA){
                var pointA = this.SlingShot.bodyA.position;
                var pointB = this.pointB;

                strokeWeight(3);

                fill("blue");
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    

}