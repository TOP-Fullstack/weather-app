export default function getDOMElements() {
  const obj = {};

  // Current weather DOM elements
  obj.weatherDescription = document.querySelector(".weather-description");
  obj.weatherImg = document.querySelector(".weather > img");
  obj.weatherTempFeel = document.querySelector(".weather-temperature-feels");
  obj.weatherTempMinMax = document.querySelector(".weather-temperature-minmax");
  obj.weatherStatsWind = document.querySelector(".weather-stats-wind");
  obj.weatherStatsWind = document.querySelector(".weather-stats-wind-speed");

  // Forecast DOM elements
  obj.forecastDayOneImg = document.querySelector(".forecast-day1 > img");
  obj.forecastDayOneTemp = document.querySelector(".forecast-day1 > h2");
  obj.forecastDayOne = document.querySelector(".forecast-day1 > p");

  obj.forecastDayTwoImg = document.querySelector(".forecast-day2 > img");
  obj.forecastDayTwoTemp = document.querySelector(".forecast-day2 > h2");
  obj.forecastDayTwo = document.querySelector(".forecast-day2 > p");

  obj.forecastDayThreeImg = document.querySelector(".forecast-day3 > img");
  obj.forecastDayThreeTemp = document.querySelector(".forecast-day3 > h2");
  obj.forecastDayThree = document.querySelector(".forecast-day3 > p");

  obj.forecastDayFourImg = document.querySelector(".forecast-day4 > img");
  obj.forecastDayFourTemp = document.querySelector(".forecast-day4 > h2");
  obj.forecastDayFour = document.querySelector(".forecast-day4 > p");

  return obj;
}
