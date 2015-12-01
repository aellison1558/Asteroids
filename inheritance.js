Function.prototype.inherits = function(superClass) {
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {}
MovingObject.prototype.sayHi = function() {
  console.log("hi");
};

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.saySup = function() {
  console.log("sup");
};

function Asteroids () {}
Asteroids.inherits(MovingObject);

var ship = new Ship();
var Asteroids = new Asteroids();
ship.sayHi();
Asteroids.sayHi();
ship.saySup();
Asteroids.saySup();
