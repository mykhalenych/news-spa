import { NEWS_LIST_RECIVED } from "./news.actions";

const initialState = {
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_LIST_RECIVED:
      return {
        ...state,
        news: action.payload.news,
      };
    default:
      return state;
  }
};

export default newsReducer;