class Snow{
    constructor() {
        var options = {
            'restitution':0.8,
             'isStatic':false
        }
        this.body = Bodies.rectangle(random(0,800), -50, 10, 10, options);
        this.image = loadImage("snow4.webp")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 30, 30);
        pop();
      }
}