(function() {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Asteroids = window.Asteroids;

  function GameView(ctx) {
    this.ctx = ctx;
    this.game = new Asteroids.Game();
  }

  GameView.prototype.start = function() {
    var gameView = this;
    this.bindKeyHandlers();
    setInterval(function() {
      gameView.game.step();
      gameView.game.draw(gameView.ctx);

    },
    20);
  };

  GameView.prototype.bindKeyHandlers = function() {
    var gameView = this;
    var ship = gameView.game.allObjects()[0];
    window.key("w", function(){
      ship.power([0, -5]);
    });
    window.key("a", function(){
      ship.power([-5, 0]);
    });
    window.key("s", function(){
      ship.power([0, 5]);
    });
    window.key("d", function(){
      ship.power([5, 0]);
    });
  };

  Asteroids.GameView = GameView;
})();
