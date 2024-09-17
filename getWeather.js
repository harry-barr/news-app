import FetchWrapper from "./fetchwrapper.js";
const weatherAPI = new FetchWrapper(
  "https://api.weatherstack.com/current?access_key=b6e2ad6652f1fc70de70984eb100caac&query="
);
const weatherSearchInput = document.querySelector(".search-weather");
const weatherSearchBtn = document.querySelector(".search-btn-weather");
const currentWeather = document.querySelector(".weather-container");
const weatherForm = document.querySelector(".weather-form");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather();
});

const fetchDefaultWeather = async function () {
  const defaultCity = "London"; // Set your default city here
  try {
    await getWeather(defaultCity); // Fetch weather for the default city
  } catch (error) {
    console.error("Error fetching default weather:", error);
  }
};

const getWeather = async function (city) {
  currentWeather.innerHTML = "";
  const searchCity = weatherSearchInput.value || city;
  if (!searchCity) {
    return alert("You must type in a city name!");
  }
  try {
    const data = await weatherAPI.get(`${searchCity}`);
    console.log(data);
    currentWeather.insertAdjacentHTML(
      "beforeend",
      `<div>
            <h1 class="city-temp">${data.current.temperature} °C</h1>
            <h2 class="city-name">${data.location.name}</h2>
          </div>
            <div class="current-weather">
              <p class="city-desc">${data.current.weather_descriptions}</p>
              <p class="temp-feels-like">Feels like ${data.current.feelslike} °C</p>
              <p class="date">${data.location.localtime}</p>
            </div>`
    );
    weatherSearchInput.value = "";
  } catch (error) {
    console.error(error);
    throw new Error("Trouble getting weather");
  }
};

window.addEventListener("load", fetchDefaultWeather);

weatherSearchBtn.addEventListener("click", getWeather);
