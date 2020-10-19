class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if (this.body.speed>3) {
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility-0.005;
          tint(255,this.visibility);
          pop();
        }
        else{
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
      }
}