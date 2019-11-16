var result;

for (var i = 1; i <= 100; i++) {
  result = "";
  if ([i] % 2 == 0 && [i] % 3 == 0) {
    result += "LuisTheMaster<hr>";
  } else if ([i] % 2 == 0) {
    result += "IESD<hr>";
  } else if ([i] % 3 == 0) {
    result += "Forever<hr>";
  } else {
    result += [i] + "<hr>";
  }

  document.write(result);
}
