/* 
TO-FIX:
    - Search input is sending form data when the user presses enter
    - Create object to store all needed info
    - Re-factor code
    - Add loading component
    - Add styling
*/

const button = document.querySelector("input[type=button]");

async function getWeather(searchvalue) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=${API}`;
  const response = await fetch(url);
  const test = await response.json();
  console.log(test);
}

button.addEventListener("click", () => {
  const search = document.querySelector("input[type=text]").value;
  getWeather(search);
});
