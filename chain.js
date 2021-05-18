class Line1 {
constructor (body1,body2){
 var options = {
length:20,
stiffness:0.05,
bodyA: body1,
bodyB:body2,


 }  
    
this.chain = Matter.Constraint.create(options) 
World.add(world,this.chain)
 

    
}
display (){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight (2);
line(pointA.x,pointA.y,pointB.x,pointB.y);


}

}