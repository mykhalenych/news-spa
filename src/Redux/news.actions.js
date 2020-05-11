import {
  getNews,
  scienceNews,
  getFootballNews,
  getBusinessNews,
} from "../gate-ways/gateWays";

export const NEWS_LIST_RECIVED = "NEWS_LIST_RECIVED";
export const SCIENCE_LIST_RECIVED = "SCIENCE_LIST_RECIVED";
export const FOOTBALL_LIST_RECIVED = "FOOTBALL_LIST_RECIVED";
export const BUSINESS_LIST_RECIVED = "BUSINESS_LIST_RECIVED";

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
export const footballListRecived = (footballList) => {
  const action = {
    type: FOOTBALL_LIST_RECIVED,
    payload: {
      footballList,
    },
  };
  return action;
};
export const businessListRecived = (businessList) => {
  const action = {
    type: BUSINESS_LIST_RECIVED,
    payload: {
      businessList,
    },
  };
  return action;
};

export const getScienceList = () => {
  const thunkAction = function (dispatch) {
    scienceNews().then((scienceList) =>
      dispatch(scienceListRecived(scienceList))
    );
  };
  return thunkAction;
};

export const getNewsList = () => {
  const thunkAction = function (dispatch) {
    getNews().then((newsList) => dispatch(newsListRecived(newsList)));
  };
  return thunkAction;
};

export const getFootballList = () => {
  const thunkAction = function (dispatch) {
    getFootballNews().then((newsList) =>
      dispatch(footballListRecived(newsList))
    );
  };
  return thunkAction;
};

export const getBusinessList = () => {
  const thunkAction = function (dispatch) {
    getBusinessNews().then((newsList) =>
      dispatch(businessListRecived(newsList))
    );
  };
  return thunkAction;
};
