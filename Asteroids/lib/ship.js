(function() {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Asteroids = window.Asteroids;

  function Ship (obj, game) {
    obj.COLOR = "#EF0000";
    obj.RADIUS = 10;
    obj.vel = [0, 0];
    Asteroids.MovingObject.call(this, obj);

    this.game = game;
  }

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.power = function(impulse) {
    if (this.vel[0] < 25 && this.vel[0] > -25) {
      this.vel[0] += impulse[0];
    }
    if (this.vel[1] < 25 && this.vel[1] > -25) {
      this.vel[1] += impulse[1];
    }

  };

  Asteroids.Ship = Ship;

})();
