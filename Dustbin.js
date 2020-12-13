class Dustbin {
  constructor(x, y, width, height,) {
    var options = {
      isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("white")
    fill("red");
    imageMode(CENTER);
    image(this.image,0, 0, 250,250);
    pop();
  }
};