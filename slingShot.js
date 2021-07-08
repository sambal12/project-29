class SlingShot{
    constructor(ptA,ptB){
var options = {
bodyA:ptA,
pointB: ptB,
length:45,
stiffness:2
}

this.chain = Constraint.create(options);
World.add(world,this.chain)
this.pointB = ptB
    }
    fly(){
        this.chain.bodyA= null
    }
    display(){
        if(this.chain.bodyA){
       var  pointA = this.chain.bodyA.position
        var pointB= this.pointB
       strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}