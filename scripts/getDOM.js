export default function getDOMElements() {
  const obj = {};

  // Loading gif
  obj.loader = document.querySelector(".loader");

  // Get current + forecast div containers
  obj.weatherContainer = document.querySelector(".weather");
  obj.forecastContainer = document.querySelector(".forecast");

  // Current weather DOM elements
  obj.weatherDescription = document.querySelector(".weather-description");
  obj.weatherImg = document.querySelector(".weather > img");
  obj.weatherTempFeel = document.querySelector(".weather-temperature-feels");
  obj.weatherTempMinMax = document.querySelector(".weather-temperature-minmax");
  obj.weatherStatsRain = document.querySelector(".weather-stats-rain");
  obj.weatherStatsWind = document.querySelector(".weather-stats-wind-speed");
  obj.weatherStatsWindDirection = document.querySelector(
    ".weather-stats-wind-direction"
  );

  // Forecast DOM elements
  obj.dayOne = {
    img: document.querySelector(".forecast-day1 > img"),
    temp: document.querySelector(".forecast-day1 > h2"),
    date: document.querySelector(".forecast-day1 > p"),
  };

  obj.dayTwo = {
    img: document.querySelector(".forecast-day2 > img"),
    temp: document.querySelector(".forecast-day2 > h2"),
    date: document.querySelector(".forecast-day2 > p"),
  };

  obj.dayThree = {
    img: document.querySelector(".forecast-day3 > img"),
    temp: document.querySelector(".forecast-day3 > h2"),
    date: document.querySelector(".forecast-day3 > p"),
  };

  obj.dayFour = {
    img: document.querySelector(".forecast-day4 > img"),
    temp: document.querySelector(".forecast-day4 > h2"),
    date: document.querySelector(".forecast-day4 > p"),
  };

  return obj;
}
