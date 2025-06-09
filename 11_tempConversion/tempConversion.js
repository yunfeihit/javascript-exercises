const convertToCelsius = function(fah) {
  let cel;
  cel = (fah - 32) * (5/9);
  return parseFloat(cel.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  let fah;
  fah = cel * (9/5) + 32;
  return parseFloat(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
