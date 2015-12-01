Function.prototype.myBind = function(obj) {
  var fn = this;
  var args = [].slice.call(arguments, 1);
  return function() {
    var nextArgs = [].slice.call(arguments);
    return fn.apply(obj, args.concat(nextArgs));
  };

};

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow");
// Markov says meow!

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast)("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
