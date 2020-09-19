class Box {
  constructor(x, y, width, height) {
    var options ={
      'density':1.0,
      'friction':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    rectMode(CENTER);
    fill("blue");
    rect(this.body.position.x,this.body.position.y,this.width, this.height);

}

}