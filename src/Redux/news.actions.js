import { getNews } from "../gate-ways/gateWays";

export const NEWS_LIST_RECIVED = "NEWS_LIST_RECIVED";

export const newsListRecived = (news) => {
  const action = {
    type: NEWS_LIST_RECIVED,
    payload: {
      news,
    },
  };
  return action;
};

export const getNewsList = () => {
  const thunkAction = function (dispatch) {
    getNews().then((news) => dispatch(newsListRecived(news)));
  };
  return thunkAction;
};
