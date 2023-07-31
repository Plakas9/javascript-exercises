
const convertToFahrenheit = function(x) {
  return Math.round(10*(x = (x*9/5+32)))/10; 

};

const convertToCelsius = function(y) {
  return Math.round((y = 5/9*(y-32))*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
