//news

const API_KEY = "93b5f5671161471c94506ac6327151bb"
const API_URL = "https://newsapi.org/v2/top-headlines?country=ua&apiKey=93b5f5671161471c94506ac6327151bb"


export const getNews = () => {
  return fetch(API_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((news) => {
      return news;
    });
};

//football
const FOOTBALL_KEY =  "cd2375286076499e994e42b30c632e41"
const SCIENCE_URL =" http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=93b5f5671161471c94506ac6327151bb"
export const scienceNews = () => {
  return fetch(SCIENCE_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((news) => {
      return news;
    });
};