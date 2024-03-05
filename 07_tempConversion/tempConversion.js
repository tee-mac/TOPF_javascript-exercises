const convertToCelsius = function(tempF) {
  let tempToRound = ((tempF - 32) * 5/9) * 10;
  return Math.round(tempToRound) / 10;
};

const convertToFahrenheit = function(tempC) {
  let tempToRound = (tempC * 9/5 + 32) * 10;
  return Math.round(tempToRound) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
