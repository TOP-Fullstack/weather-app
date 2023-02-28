/* 
TO-DO:
- Make responsive + style a bit more
- Change the background when the user changes city
- Change wording of main input line so it's grammatically correct in each instance of description
*/

import displayWeather from "./scripts/displayWeather.js";
import * as loader from "./scripts/loading.js";

const API = "a09d512a39043844e89ca915cb124b97";
let searchValue = document.querySelector("input[type='text']");

async function getWeather(searchvalue) {
  // Current weather API Call
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=${API}`;
  let response = await fetch(currentURL);
  const current = await response.json();

  // Forecast API Call using lat+lon from previous call
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${current.coord.lat}&lon=${current.coord.lon}&appid=${API}`;
  response = await fetch(forecastURL);
  const forecast = await response.json();

  // Display waether + hide the preloader gif
  displayWeather(current, forecast);
  loader.end();
}

/* Delay the API call + GIF load until .3 seconds
after the user stops typing */
let counter;
function startCounter() {
  counter = setInterval(() => {
    if (searchValue.value !== "") {
      loader.start();
      getWeather(searchValue.value).catch((err) => {
        console.log(err);
      });
    } else {
      loader.hide();
    }
    clearInterval(counter);
    return;
  }, 300);
}

// Listen to the form input field, and start/reset the counter
// anytime a key is pressed
searchValue.addEventListener("input", (e) => {
  e.preventDefault();
  if (counter) {
    clearInterval(counter);
  }
  startCounter();
});
