import getDOMElements from "./getDOM.js";

const DOM = getDOMElements();

export function start() {
  DOM.weatherContainer.style.visibility = "hidden";
  DOM.forecastContainer.style.visibility = "hidden";
  DOM.loader.style.visibility = "visible";
  DOM.loader.style.opacity = 1;
}

export function end() {
  DOM.weatherContainer.style.visibility = "visible";
  DOM.forecastContainer.style.visibility = "visible";
  DOM.loader.style.opacity = 0;
}

export function hide() {
  DOM.loader.style.visibility = "hidden";
}
