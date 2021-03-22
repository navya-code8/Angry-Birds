class SlingShot{

    constructor(body1, point2){

        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.2,
            length: 15
        }

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        this.point = point2

        World.add(world,this.sling);
         
    }

    attach(body1){
      
      this.sling.bodyA = body1;
    }

    fly(){
    
        this.sling.bodyA = null;

    }

    display(){
        stroke(48,22,8);
    
        image(this.sling1, 200,70, 40, 120)
        image(this.sling2, 170,70, 40, 70)
        if (this.sling.bodyA){
          var posA = this.sling.bodyA.position;
          var posB =  this.sling.pointB;

            if (posA.x<200){
              strokeWeight(7)
              image(this.sling3, posA.x-30, posA.y)
              line(posA.x-20, posA.y, posB.x-10, posB.y+40)
              line(posA.x-20, posA.y, posB.x+30, posB.y+30)
            }

            else if(posA.x>200){
              strokeWeight(4)
              image(this.sling3, posA.x-30, posA.y)
              line(posA.x-20, posA.y, posB.x-10, posB.y+40)
              line(posA.x-20, posA.y, posB.x+30, posB.y+30)

            }
        }

    }




}