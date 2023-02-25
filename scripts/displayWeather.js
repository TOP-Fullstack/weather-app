import getDOMElements from "./getDOM.js";

export default function displayWeather(current, forecast) {
  const DOM = getDOMElements();

  // Populate current weather
  DOM.weatherDescription.innerHTML = `${current.weather[0].description}`;
  DOM.weatherImg.src = `http://openweathermap.org/img/wn/${
    current.weather[0].icon.slice(0, 2) + "d"
  }@4x.png`;
  DOM.weatherImg.alt = `${current.weather[0].description}`;
  DOM.weatherTempFeel.innerHTML = `${(current.main.temp - 273.15).toFixed(1)}`;
  DOM.weatherTempMinMax.innerHTML = `${(current.main.temp_min - 273.15).toFixed(
    1
  )} / ${(current.main.temp_max - 273.15).toFixed(1)}`;

  // Populate current weather stats

  // Populate forecast
  // Day one
  DOM.forecastDayOne.innerHTML = "Tomorrow";
  DOM.forecastDayOneTemp.innerHTML = (
    forecast.list[3].main.temp - 273.15
  ).toFixed(1);
  DOM.forecastDayOneImg.src = `http://openweathermap.org/img/wn/${
    forecast.list[3].weather[0].icon.slice(0, 2) + "d"
  }@2x.png`;

  // Day two
  DOM.forecastDayTwo.innerHTML = "Tomorrow";
  DOM.forecastDayTwoTemp.innerHTML = (
    forecast.list[11].main.temp - 273.15
  ).toFixed(1);
  DOM.forecastDayTwoImg.src = `http://openweathermap.org/img/wn/${
    forecast.list[11].weather[0].icon.slice(0, 2) + "d"
  }@2x.png`;

  // Day three
  DOM.forecastDayThree.innerHTML = "Tomorrow";
  DOM.forecastDayThreeTemp.innerHTML = (
    forecast.list[19].main.temp - 273.15
  ).toFixed(1);
  DOM.forecastDayThreeImg.src = `http://openweathermap.org/img/wn/${
    forecast.list[19].weather[0].icon.slice(0, 2) + "d"
  }@2x.png`;

  // Day four
  DOM.forecastDayFour.innerHTML = "Tomorrow";
  DOM.forecastDayFourTemp.innerHTML = (
    forecast.list[27].main.temp - 273.15
  ).toFixed(1);
  DOM.forecastDayFourImg.src = `http://openweathermap.org/img/wn/${
    forecast.list[27].weather[0].icon.slice(0, 2) + "d"
  }@2x.png`;
}

// data.main.temp - 273.15
// new Date(data.sys.sunset * 1000)
//
