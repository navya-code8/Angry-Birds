class Ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   // this.image1 = loadImage("sprites/base.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("SaddleBrown");
    stroke("brown");
    strokeWeight(0);
    rect(pos.x, pos.y, this.width,this.height);
  }
}