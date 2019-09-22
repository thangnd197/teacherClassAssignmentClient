export function convertListWeeksToString(weeks) {
  if (weeks === []) return "";
  var str = "" + weeks[0];
  if (weeks.length === 1) return str;
  var onlyOne = true;

  for (var i = 1; i < weeks.length; i++) {

    if (weeks[i] === weeks[i-1] + 1) {
      onlyOne = false;
      if (i === weeks.length - 1) {
        str +="-" + weeks[i];
      }
    }
    else {
      if (onlyOne) {
        str += "," + weeks[i];
      } else {
      str += "-" + weeks[i-1] + "," + weeks[i];
      }
      onlyOne = true;
    }
  }
  return str;
}