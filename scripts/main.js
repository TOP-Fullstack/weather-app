/* 
TO-DO:
- Get the date and put that underneath forecast days
- Get fontawesome working
- Get the current weather stats up
- Add buffering icon
- Change DOM object names: instead of dayOne, etc, make an object named dayone, name properties img,temp,day
- Make responsive
- Change the background when the user changes city
- Don't call api until the search field hasn't been typed in for one second
- Add country code next to search input so user has confirmation they're getting results from the right place
- Re-work logic inside api call
*/

import displayWeather from "./displayWeather.js";

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
      console.log(current);
      // dt_txt (date)
    }
  }
}

searchValue.addEventListener("input", (e) => {
  e.preventDefault();
  getWeather(searchValue.value);
});

searchValue.value = "Ottawa";
getWeather("Ottawa");
