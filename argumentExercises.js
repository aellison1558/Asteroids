function sum() {
  var result = 0;
  var args = [].slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));
