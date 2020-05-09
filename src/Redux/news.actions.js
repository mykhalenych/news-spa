import { getNews, scienceNews } from "../gate-ways/gateWays";

export const NEWS_LIST_RECIVED = "NEWS_LIST_RECIVED";
export const SCIENCE_LIST_RECIVED = "SCIENCE_LIST_RECIVED"

export const newsListRecived = (newsList) => {
  const action = {
    type: NEWS_LIST_RECIVED,
    payload: {
      newsList,
    },
  };
  return action;
};
export const scienceListRecived = (scienceList) => {
  const action = {
    type: SCIENCE_LIST_RECIVED,
    payload: {
      scienceList,
    },
  };
  return action;
};

export const getScienceList = () => {
  const thunkAction = function (dispatch) {
    scienceNews().then((scienceList) => dispatch(scienceListRecived(scienceList)));
  };
  return thunkAction;
};

export const getNewsList = () => {
  const thunkAction = function (dispatch) {
    getNews().then((newsList) => dispatch(newsListRecived(newsList)));
  };
  return thunkAction;
};
