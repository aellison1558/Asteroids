(function() {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }
  var Util = {
    inherits: function(childClass, superClass) {
      function Surrogate() {}
      
      Surrogate.prototype = superClass.prototype;
      childClass.prototype = new Surrogate();
      childClass.prototype.constructor = childClass;
    },

    randomVec: function(speed) {
      var dx = ((Math.random() * 2) - 1) * speed;
      var dy = ((Math.random() * 2) - 1) * speed;
      return [dx, dy];
    }
  };

  window.Asteroids.Util = Util;
} )();
