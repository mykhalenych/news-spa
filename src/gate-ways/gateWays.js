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