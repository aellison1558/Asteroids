(function() {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Asteroids = window.Asteroids;

  function Asteroid (obj, game) {
    obj.COLOR = "#FFFFFF";
    obj.RADIUS = 50;
    obj.vel = Asteroids.Util.randomVec(10);
    Asteroids.MovingObject.call(this, obj);

    this.game = game;
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      alert("You LOSE!");
    }
  };

  Asteroids.Asteroid = Asteroid;

})();
