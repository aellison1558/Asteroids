(function() {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  function MovingObject(obj) {
    for (var arg in obj) {
      if (obj.hasOwnProperty(arg)) {
        this[arg] = obj[arg];
      }
    }
  }

  MovingObject.prototype.draw = function(ctx) {
    // console.log(ctx);
    // console.log(this.COLOR);
    ctx.fillStyle = this.COLOR;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.RADIUS,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.game.wrap(this.pos);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var squaredX = Math.pow((this.pos[0] - otherObject.pos[0]), 2);
    var squaredY = Math.pow((this.pos[1] - otherObject.pos[1]), 2);
    var distance = (Math.sqrt(squaredX + squaredY));
    var sumRadii = this.RADIUS + otherObject.RADIUS;

    return (sumRadii >= distance);
  };

  MovingObject.prototype.collideWith = function(otherObject) {

  };

  window.Asteroids.MovingObject = MovingObject;
} )();
