import getDOMElements from "./getDOM.js";
import getWeekDay from "./getWeekDay.js";

export default function displayWeather(current, forecast) {
  const DOM = getDOMElements();

  // Populate current weather
  DOM.weatherDescription.innerHTML = `${current.weather[0].description}`;

  // Make sure the icon that's selected here is of the daytime variant for aesthetic purposes
  DOM.weatherImg.src = `http://openweathermap.org/img/wn/${
    current.weather[0].icon.slice(0, 2) + "d"
  }@4x.png`;
  DOM.weatherImg.alt = `${current.weather[0].description}`;
  DOM.weatherTempFeel.innerHTML = `${(current.main.temp - 273.15).toFixed(1)}`;
  DOM.weatherTempMinMax.innerHTML = `${(current.main.temp_min - 273.15).toFixed(
    1
  )} / ${(current.main.temp_max - 273.15).toFixed(1)}`;

  // Populate current weather stats
  current.rain
    ? (DOM.weatherStatsRain.innerHTML = `${current.rain["1h"]} mm`)
    : (DOM.weatherStatsRain.innerHTML = "0 mm");
  DOM.weatherStatsWind.innerHTML = current.wind.speed + " mph";
  DOM.weatherStatsWindDirection.innerHTML = current.wind.deg + "&#176;";

  // Populate forecast
  // Day one
  DOM.dayOne.date.innerHTML = getWeekDay(forecast.list[3].dt);
  DOM.dayOne.temp.innerHTML = (forecast.list[3].main.temp - 273.15).toFixed(1);
  DOM.dayOne.img.src = `http://openweathermap.org/img/wn/${
    forecast.list[3].weather[0].icon.slice(0, 2) + "d"
  }@2x.png`;

  // Day two
  DOM.dayTwo.date.innerHTML = getWeekDay(forecast.list[11].dt);
  DOM.dayTwo.temp.innerHTML = (forecast.list[11].main.temp - 273.15).toFixed(1);
  DOM.dayTwo.img.src = `http://openweathermap.org/img/wn/${
    forecast.list[11].weather[0].icon.slice(0, 2) + "d"
  }@2x.png`;

  // Day three
  DOM.dayThree.date.innerHTML = getWeekDay(forecast.list[19].dt_txt);
  DOM.dayThree.temp.innerHTML = (forecast.list[19].main.temp - 273.15).toFixed(
    1
  );
  DOM.dayThree.img.src = `http://openweathermap.org/img/wn/${
    forecast.list[19].weather[0].icon.slice(0, 2) + "d"
  }@2x.png`;

  // Day four
  DOM.dayFour.date.innerHTML = getWeekDay(forecast.list[27].dt_txt);
  DOM.dayFour.temp.innerHTML = (forecast.list[27].main.temp - 273.15).toFixed(
    1
  );
  DOM.dayFour.img.src = `http://openweathermap.org/img/wn/${
    forecast.list[27].weather[0].icon.slice(0, 2) + "d"
  }@2x.png`;
}
