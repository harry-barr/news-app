import FetchWrapper from "./fetchwrapper.js";
const newsAPI = new FetchWrapper(
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=de15e0d6542040ffaaaebe4f8d383524"
);
const ukTab = document.querySelector(".uk-btn");
const newsContainer = document.querySelector(".news-container");

const getUkNews = async function (e) {
  e.preventDefault();
  try {
    const data = await newsAPI.get(``);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

ukTab.addEventListener("click", getUkNews);
