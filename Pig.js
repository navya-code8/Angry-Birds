class Pig extends BaseClass{
    constructor(x, y) {
      super(x,y,50,50);
      this.image = loadImage("sprites/enemy.png")
      console.log(this.body.speed)
      this.visible = 255;
      
    /*  var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }*/

  }


    display(){

      if (this.body.speed<2){

        super.display();
      }

      else{
        World.remove(world,this.body)
        push();
       // console.log("display")
        tint(255,this.visible)
        image(this.image,this.body.position.x, this.body.position.y,50,50)
        this.visible-=3;
        pop();
      }

    }

    score(){

      if (this.visible<0 && this.visible>-1000){
        //console.log(score)
        score++

      }


    }
  }

