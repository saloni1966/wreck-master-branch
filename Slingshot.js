class Slingshot{

    constructor(body1,point){
        var options = {
            bodyA : body1,
            pointB : point,
            stiffness : 0.3,
            length : 230
           
        }
       
        this.sling = Constraint.create(options);
        
        World.add(myworld,this.sling);

    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        push();
       
        stroke("orange")
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }

}