/* 
TO-DO:
- Re-work logic inside api call
- Change the background when the user changes city
- Choose nicer loading icon
- Find a way to see when user has stopped typing for .5 seconds
*/

import displayWeather from "./scripts/displayWeather.js";
import * as load from "./scripts/loading.js";

const API = "a09d512a39043844e89ca915cb124b97";
let searchValue = document.querySelector("input[type='text']");

async function getWeather(searchvalue) {
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=${API}`;
  let response = await fetch(currentURL);
  const current = await response.json();
  if (current.cod != "404") {
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${current.coord.lat}&lon=${current.coord.lon}&appid=${API}`;
    response = await fetch(forecastURL);
    const forecast = await response.json();
    if (forecast.cod != "404") {
      displayWeather(current, forecast);
      load.end();
    }
  }
}

// let count = 0;

// const counterInterval = setInterval(() => {
//   if (count >= 10) {
//     clearInterval(counterInterval);
//     return;
//   }
//   console.log(count);
//   count++;
// }, 1000);

searchValue.addEventListener("input", (e) => {
  e.preventDefault();
  load.start();
  getWeather(searchValue.value);
});
