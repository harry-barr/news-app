import FetchWrapper from "./fetchwrapper.js";
const weatherAPI = new FetchWrapper(
  "https://api.weatherstack.com/current?access_key=b6e2ad6652f1fc70de70984eb100caac&query="
);
const weatherSearchInput = document.querySelector(".search-weather");
const weatherSearchBtn = document.querySelector(".search-btn-weather");
const cityName = document.querySelector(".city-name");
const cityTemp = document.querySelector(".city-temp");
const cityDesc = document.querySelector(".city-desc");
const feelsLike = document.querySelector(".temp-feels-like");
const date = document.querySelector(".date");
const currentWeather = document.querySelector(".weather-container");

const lowerCaseAndHypenate = function () {
  weatherSearchInput.value = weatherSearchInput.value
    .trim()
    .replaceAll(" ", "-")
    .toLowerCase();
};

const getWeather = async function () {
  currentWeather.innerHTML = "";
  if (!weatherSearchInput.value) {
    return alert("You must type in a city name!");
  }

  try {
    const data = await weatherAPI.get(`${weatherSearchInput.value}`);
    console.log(data);
    currentWeather.insertAdjacentHTML(
      "beforeend",
      `<div>
            <h1 class="city-temp">${data.current.temperature} °C</h1>
          </div>
            <div class="current-weather">
              <h2 class="city-name">${data.location.name}</h2>
              <p class="city-desc">${data.current.weather_descriptions}</p>
              <p class="temp-feels-like">Feels like ${data.current.feelslike} °C</p>
              <p class="date">${data.location.localtime}</p>
            </div>`
    );
    weatherSearchInput.value = "";
  } catch (error) {
    console.error(error);
  }
};

weatherSearchBtn.addEventListener("click", getWeather);
