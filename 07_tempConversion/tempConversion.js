const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5/9);
  const celsiusToOneDecimal = Math.round(celsius * 10) / 10
  return celsiusToOneDecimal;
};

const convertToFahrenheit = function(celsius) {
 let fahrenheit = celsius * (9/5) + 32;
 const fahrenheitToOneDecimal = Math.round(fahrenheit * 10) / 10;
  return fahrenheitToOneDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
