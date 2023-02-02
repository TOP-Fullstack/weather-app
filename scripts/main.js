/* 
TO-FIX:
    - Search input is sending form data when the user presses enter
    - Re-factor code
    - Add loading component
    - Add styling
*/

const API = "a09d512a39043844e89ca915cb124b97";
const button = document.querySelector("input[type=button]");

async function getWeather(searchvalue) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=${API}`;
  const response = await fetch(url);
  const test = await response.json();
  console.log(test);
  const obj = parseJSONIntoObj(test);
}

function parseJSONIntoObj(json) {
  const obj = {};
  obj.name = json.name;
  obj.lat = json.coord.lat;
  obj.lon = json.coord.lon;
  obj.temp = json.main.temp;
  obj.feels_like = json.main.feels_like;
  obj.country = json.sys.country;
  obj.sunrise = json.sys.sunrise;
  obj.sunset = json.sys.sunset;
  obj.weather = json.weather[0].main;
  obj.weather_description = json.weather[0].description;
  obj.wind = json.wind.speed;
  return obj;
}

function displayWeather(obj) {}

button.addEventListener("click", () => {
  const search = document.querySelector("input[type=text]").value;
  getWeather(search);
});

window.addEventListener("load", getWeather("Ottawa"));
