import { createSelector } from "reselect";

export const newsListSelector = (state) => state.news.newsList;
export const scienceListSelector = (state) => state.news.scienceList;
export const footballListSelector = (state) => state.news.footballList;
export const businessListSelector = (state) => state.news.businessList

const filterArray = (arr) => {
  return arr.map((item) => {
    let id = Math.round(Math.random() * 100000)
    item['id'] = id
    return item
  });
};


export const filteredNewsList = createSelector(
  [newsListSelector],
  (newsList) => {
    if (newsList.length === 0) return newsList;
    return filterArray(newsList.articles);
  }
);

export const filteredScienceList= createSelector(
  [scienceListSelector],
  (scienceList) => {
    if (scienceList.length === 0) return scienceList;
    return filterArray(scienceList.articles);
  }
);

export const filteredFootballList= createSelector(
  [footballListSelector],
  (footballList) => {
    if (footballList.length === 0) return footballList;
    return filterArray(footballList.articles);
  }
);
export const filteredBusinessList = createSelector(
  [businessListSelector],
  (businessList) => {
    if (businessList.length === 0) return businessList;
    return filterArray(businessList.articles);
  }
);
