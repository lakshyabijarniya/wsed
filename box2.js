class BoxA{
    constructor(x, y, width, height) {
        var options = {
          'isStatic':true,
            'restitution':0.4,
            'friction':0.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
      }
  }
  