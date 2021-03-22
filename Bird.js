class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }
  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    //console.log(this.body.position)

    if (this.body.velocity.x>5 && this.body.position.x>200){
      var pos = [this.body.position.x, this.body.position.y];
      this.trajectory.push(pos);
    }
    for(var i = 0; this.trajectory.length>i; i+=2){
      image(this.smoke, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }


}
