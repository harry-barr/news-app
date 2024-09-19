import FetchWrapper from "./fetchwrapper.js";
const searchQuery = document.querySelector(".search-articles");
const API = new FetchWrapper("https://newsapi.org/v2/top-headlines?q=");
const mainNews = document.querySelector(".main-news");
const smallNews = document.querySelector(".small-news");
const articleSearchBtn = document.querySelector(".search-btn-articles");
const alsoInTheNews = document.querySelector(".small-news-title");

const getQueryArticles = async function () {
  let query = searchQuery.value;

  try {
    const data = await API.get(
      `${query}&apiKey=de15e0d6542040ffaaaebe4f8d383524`
    );
    console.log(data);
    mainNews.innerHTML = "";
    smallNews.style.display = "none";
    alsoInTheNews.style.display = "none";

    mainNews.insertAdjacentHTML(
      "beforeend",
      `<div class="main-news-left">
      <a href="${data.articles[0].url}" target="_blank">
      <img src="${data.articles[0].urlToImage}" class="news-tile-img"> 
      </a>   
      <a href="${data.articles[0].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[0].title}</h2></a>
      <hr class="news-tile-divider" />
      <p class="news-tile-desc">
        ${data.articles[0].description}
      </p>
    </div>
    <div class="main-news-right">
      <a href="${data.articles[1].url}" target="_blank">
      <img src="${data.articles[1].urlToImage}" class="news-tile-img"> 
      </a>
      <a href="${data.articles[1].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[1].title}</h2></a>
      <hr class="news-tile-divider" />
      <p class="news-tile-desc">
      ${data.articles[1].description}
      </p>
    </div>
    <div class="main-news-left">
      <a href="${data.articles[2].url}" target="_blank">
      <img src="${data.articles[2].urlToImage}" class="news-tile-img"> 
      </a>   
      <a href="${data.articles[2].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[2].title}</h2></a>
      <hr class="news-tile-divider" />
      <p class="news-tile-desc">
        ${data.articles[2].description}
      </p>
    </div>
    <div class="main-news-right">
      <a href="${data.articles[3].url}" target="_blank">
      <img src="${data.articles[3].urlToImage}" class="news-tile-img"> 
      </a>
      <a href="${data.articles[3].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[3].title}</h2></a>
      <hr class="news-tile-divider" />
      <p class="news-tile-desc">
      ${data.articles[3].description}
      </p>
    </div>
    <button class="load-more-btn">Load More</button>`
    );
    const loadMoreBtn = document.querySelector(".load-more-btn");

    function loadMore() {
      loadMoreBtn.style.display = "none";
      const moreNews = `<div class="main-news-left">
      <a href="${data.articles[4].url}" target="_blank">
      <img src="${data.articles[4].urlToImage}" class="news-tile-img"> 
      </a>   
      <a href="${data.articles[4].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[4].title}</h2></a>
      <hr class="news-tile-divider" />
      <p class="news-tile-desc">
        ${data.articles[4].description}
      </p>
    </div>
    <div class="main-news-right">
      <a href="${data.articles[5].url}" target="_blank">
      <img src="${data.articles[5].urlToImage}" class="news-tile-img"> 
      </a>
      <a href="${data.articles[5].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[5].title}</h2></a>
      <hr class="news-tile-divider" />
      <p class="news-tile-desc">
      ${data.articles[5].description}
      </p>
    </div>
    <div class="main-news-left">
        <a href="${data.articles[6].url}" target="_blank">
        <img src="${data.articles[6].urlToImage}" class="news-tile-img"> 
        </a>   
        <a href="${data.articles[6].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[6].title}</h2></a>
        <hr class="news-tile-divider" />
        <p class="news-tile-desc">
          ${data.articles[6].description}
        </p>
      </div>
      <div class="main-news-right">
        <a href="${data.articles[7].url}" target="_blank">
        <img src="${data.articles[7].urlToImage}" class="news-tile-img"> 
        </a>
        <a href="${data.articles[7].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[7].title}</h2></a>
        <hr class="news-tile-divider" />
        <p class="news-tile-desc">
        ${data.articles[7].description}
        </p>
      </div>
    <button class="load-more-btn-2">Load More</button>`;
      mainNews.insertAdjacentHTML("beforeend", moreNews);

      function loadMore2() {
        loadMoreBtn2.style.display = "none";
        const moreNews = `<div class="main-news-left">
        <a href="${data.articles[8].url}" target="_blank">
        <img src="${data.articles[8].urlToImage}" class="news-tile-img"> 
        </a>   
        <a href="${data.articles[8].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[8].title}</h2></a>
        <hr class="news-tile-divider" />
        <p class="news-tile-desc">
          ${data.articles[8].description}
        </p>
      </div>
      <div class="main-news-right">
        <a href="${data.articles[9].url}" target="_blank">
        <img src="${data.articles[9].urlToImage}" class="news-tile-img"> 
        </a>
        <a href="${data.articles[9].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[9].title}</h2></a>
        <hr class="news-tile-divider" />
        <p class="news-tile-desc">
        ${data.articles[9].description}
        </p>
      </div>
      <div class="main-news-left">
        <a href="${data.articles[10].url}" target="_blank">
        <img src="${data.articles[10].urlToImage}" class="news-tile-img"> 
        </a>   
        <a href="${data.articles[10].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[10].title}</h2></a>
        <hr class="news-tile-divider" />
        <p class="news-tile-desc">
          ${data.articles[10].description}
        </p>
      </div>
      <div class="main-news-right">
        <a href="${data.articles[11].url}" target="_blank">
        <img src="${data.articles[11].urlToImage}" class="news-tile-img"> 
        </a>
        <a href="${data.articles[11].url}" target="_blank"><h2 class="news-tile-headline">${data.articles[11].title}</h2></a>
        <hr class="news-tile-divider" />
        <p class="news-tile-desc">
        ${data.articles[11].description}
        </p>
      </div>`;
        mainNews.insertAdjacentHTML("beforeend", moreNews);
      }

      const loadMoreBtn2 = document.querySelector(".load-more-btn-2");
      loadMoreBtn2.addEventListener("click", loadMore2);
    }

    loadMoreBtn.addEventListener("click", loadMore);

    searchQuery.value = "";
  } catch (error) {
    console.error(error);
    const errorDiv = document.createElement("div");
    errorDiv.innerHTML = "Sorry, we couldn't find any articles for that :(";
    errorDiv.style.margin = "40px";
    errorDiv.style.fontSize = "1.5rem";
    mainNews.appendChild(errorDiv);
  }
};

articleSearchBtn.addEventListener("click", getQueryArticles);
