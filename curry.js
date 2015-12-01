var curriedSum = function(times) {
  var numbers = [];

  function func(nextNum) {
    numbers.push(nextNum);
    if (numbers.length === times) {
      var result = 0;
      for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
      }
      return result;
    } else {
      return func();
    }
  }

  return func;
};
  // var sum = curriedSum(4);
  // console.log(sum(1)(2)(3)(4));


  var curry = function(times, callback, startingValue) {
    var numbers = [];

    function func(nextNum) {
      numbers.push(nextNum);

      if (numbers.length === times) {
        
        var i = 1;
        var result = numbers[0];
        if (typeof(startingValue) !== 'undefined') {
          i = 0;
          result = startingValue;
        }

        for (i; i < numbers.length; i++) {
          result = callback(result, numbers[i]);
        }
        return result;
      } else {
        return func;
      }
    }

    return func;
  };
var sum = curry(4, function(a, b) {return (a + b);});
console.log(sum(1)(2)(3)(4));
sum = curry(4, function(a, b) {return (a + b);}, 1);
console.log(sum(1)(2)(3)(4));
sum = curry(4, function(a, b) {return (a * b);}, 1);
console.log(sum(1)(2)(3)(4));
var greeting = curry(2, function(a, b) {return (a + b);});
console.log(greeting("hello")(" there"));
