(function() {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Asteroids = window.Asteroids;

  function Game () {
    this.DIM_X = 1000;
    this.DIM_Y = 850;
    this.NUM_ASTEROIDS = 4;
    this.asteroids = [];
    this.addAsteroids();
  }

  Game.prototype.allObjects = function() {
    var all = this.asteroids;
    return (all);
  };


  Game.prototype.randomPosition = function() {
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x, y];
  };

  Game.prototype.addAsteroids = function() {
    this.asteroids.push( new Asteroids.Ship({pos: this.randomPosition()},this));
    for (var i = 0; i < this.NUM_ASTEROIDS; i ++) {
      this.asteroids.push(
        new Asteroids.Asteroid({pos: this.randomPosition()}, this)
      );
    }

  };

  Game.prototype.draw = function (ctx) {
   //this will empty the canvas
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.rect(0, 0, 1000, 850);
    ctx.fillStyle="black";
    ctx.fill();
    this.allObjects().forEach(function (flyingThing) {
      flyingThing.draw(ctx);
    });
 };

  Game.prototype.move = function () {
    this.allObjects().forEach(function (flyingThing) {
      flyingThing.move();
    });
 };

 Game.prototype.wrap = function(pos) {
   if (pos[0] >= 1000) {
     pos[0] = 0;
   } else if (pos[0] <= 0) {
     pos[0] = 1000;
   }
   if (pos[1] >= 850) {
     pos[1] = 0;
   } else if (pos[1] <= 0) {
     pos[1] = 850;
   }
   return pos;
 };

 Game.prototype.checkCollisions = function() {
   for(var i = 0; i < this.allObjects().length - 1; i++) {
     for(var j = i + 1; j < this.allObjects().length; j++) {
       var firstObject = this.allObjects()[i];
       var secondObject = this.allObjects()[j];
       if (firstObject.isCollidedWith(secondObject)) {
         firstObject.collideWith(secondObject);
         secondObject.collideWith(firstObject);
       }
     }
   }
 };

 Game.prototype.step = function() {
   this.move();
   this.checkCollisions();
 };



  Asteroids.Game = Game;
})();
