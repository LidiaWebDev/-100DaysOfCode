var result;
for (var i = 1; i < 101; i++) {
  result = "";
  if ([i] % 2 == 0) {
    result += "Fizz<hr>";
  } else if ([i] % 3 == 0) {
    result += "Buzz<hr>";
  } else if ([i] % 5 == 0) {
    result += "FizzBuzz<hr>";
  } else {
    result += [i] + "<hr>";
  }
  document.write(result);
}
