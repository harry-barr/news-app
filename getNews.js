import FetchWrapper from "./fetchwrapper.js";
const newsAPI = new FetchWrapper(
  "https://newsapi.org/v2/top-headlines?country=us"
);
const getNewsBtns = document.querySelectorAll(".get-news-btn");
const mainNews = document.querySelector(".main-news");
const smallNews = document.querySelector(".small-news");
const alsoInTheNews = document.querySelector(".small-news-title");
const burgerBtn = document.querySelector(".burger-btn");
const navMenu = document.querySelector(".nav-menu");
const newsContainer = document.querySelector(".news-container");
const listItems = document.querySelectorAll(".list-item");

/*

  NORMAL SIZE FUNCTIONS

*/

const loadHomePageNews = async function () {
  mainNews.innerHTML = "";
  smallNews.innerHTML = "";
  const articles = await fetchNews("headlines"); // Load the "headlines" category as default
  if (articles) {
    renderArticles(articles);
  }
};

// Fetch default news when the page loads
window.addEventListener("load", loadHomePageNews);

const renderArticles = function (articles) {
  mainNews.insertAdjacentHTML(
    "beforeend",
    `<div class="main-news-left">
      <a href="${articles[0].url}" target="_blank">
      <img src="${articles[0].urlToImage}" class="news-tile-img"> 
      </a>   
      <a href="${articles[0].url}" target="_blank"><h2 class="news-tile-headline">${articles[0].title}</h2></a>
      <hr class="news-tile-divider" />
      <p class="news-tile-desc">
        ${articles[0].description}
      </p>
    </div>
    <div class="main-news-right">
      <a href="${articles[1].url}" target="_blank">
      <img src="${articles[1].urlToImage}" class="news-tile-img"> 
      </a>
      <a href="${articles[1].url}" target="_blank"><h2 class="news-tile-headline">${articles[1].title}</h2></a>
      <hr class="news-tile-divider" />
      <p class="news-tile-desc">
      ${articles[1].description}
      </p>
    </div>
    <div class="main-news-left">
      <a href="${articles[2].url}" target="_blank">
      <img src="${articles[2].urlToImage}" class="news-tile-img"> 
      </a>   
      <a href="${articles[2].url}" target="_blank"><h2 class="news-tile-headline">${articles[2].title}</h2></a>
      <hr class="news-tile-divider" />
      <p class="news-tile-desc">
        ${articles[2].description}
      </p>
    </div>
    <div class="main-news-right">
      <a href="${articles[3].url}" target="_blank">
      <img src="${articles[3].urlToImage}" class="news-tile-img"> 
      </a>
      <a href="${articles[3].url}" target="_blank"><h2 class="news-tile-headline">${articles[3].title}</h2></a>
      <hr class="news-tile-divider" />
      <p class="news-tile-desc">
      ${articles[3].description}
      </p>
    </div>`
  );
  smallNews.insertAdjacentHTML(
    "beforeend",
    `
    <div class="small-news-left">
          <a href="${articles[2].url}" target="_blank"><p>${articles[2].title}</p></a>
          <a href="${articles[3].url}" target="_blank"><p>${articles[3].title}</p></a>
          <a href="${articles[4].url}" target="_blank"><p>${articles[4].title}</p></a>
          <a href="${articles[5].url}" target="_blank"><p>${articles[5].title}</p></a>
          <a href="${articles[6].url}" target="_blank"><p>${articles[6].title}</p></a>
          <a href="${articles[7].url}" target="_blank"><p>${articles[7].title}</p></a>
        </div>
        <div class="small-news-right">
          <a href="${articles[8].url}" target="_blank"><p>${articles[8].title}</p></a>
          <a href="${articles[9].url}" target="_blank"><p>${articles[9].title}</p></a>
          <a href="${articles[10].url}" target="_blank"><p>${articles[10].title}</p></a>
          <a href="${articles[11].url}" target="_blank"><p>${articles[11].title}</p></a>
          <a href="${articles[12].url}" target="_blank"><p>${articles[12].title}</p></a>
          <a href="${articles[13].url}" target="_blank"><p>${articles[13].title}</p></a>
        </div>`
  );
};

const fetchNews = async function (category) {
  let url = `&apiKey=de15e0d6542040ffaaaebe4f8d383524`;

  if (category !== "headlines") {
    url = `&category=${category}&apiKey=de15e0d6542040ffaaaebe4f8d383524`;
  }
  try {
    const data = await newsAPI.get(url);
    return data.articles;
  } catch (error) {
    console.error(error);
  }
};

const getNews = async function (e) {
  e.preventDefault();
  smallNews.style.display = "";
  mainNews.innerHTML = "";
  smallNews.innerHTML = "";
  alsoInTheNews.style.display = "";
  let active = document.querySelector(".active");
  active.classList.remove("active");
  e.currentTarget.classList.add("active");
  const category = e.currentTarget.value;
  const articles = await fetchNews(category);
  if (articles) {
    renderArticles(articles);
  }
};

getNewsBtns.forEach((btn) => {
  btn.addEventListener("click", getNews);
});

/* 

  BURGER MENU FUNCTIONS

*/

/* BURGER MENU FUNCTIONS */

const getBurgerNews = async function (e) {
  e.preventDefault();
  e.stopPropagation();
  smallNews.style.display = "";
  mainNews.innerHTML = "";
  smallNews.innerHTML = "";
  alsoInTheNews.style.display = "";
  let active = document.querySelector(".nav-live");
  if (active) active.classList.remove("nav-live");
  e.currentTarget.classList.add("nav-live");
  const listCategory = e.currentTarget.value;
  const articles = await fetchNews(listCategory);
  if (articles) {
    renderArticles(articles);
  }
};

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  newsContainer.style.marginTop = navMenu.classList.contains("open")
    ? "160px"
    : "0";
});

// Close menu on outside click
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
    navMenu.classList.remove("open");
    newsContainer.style.marginTop = "0"; // Reset margin
  }
});

// Close menu on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navMenu.classList.remove("open"); // Close menu on larger screens
    newsContainer.style.marginTop = "0"; // Reset margin
  }
});

// Add event listeners to burger menu items
listItems.forEach((item) => {
  item.addEventListener("click", getBurgerNews);
});
