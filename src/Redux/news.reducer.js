import {
  NEWS_LIST_RECIVED,
  SCIENCE_LIST_RECIVED,
  FOOTBALL_LIST_RECIVED,
  BUSINESS_LIST_RECIVED,
} from "./news.actions";

const initialState = {
  newsList: [],
  scienceList: [],
  footballList: [],
  businessList: [],
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_LIST_RECIVED:
      return {
        ...state,
        newsList: action.payload.newsList,
      };
    case SCIENCE_LIST_RECIVED:
      return {
        ...state,
        scienceList: action.payload.scienceList,
      };
    case FOOTBALL_LIST_RECIVED:
      return {
        ...state,
        footballList: action.payload.footballList,
      };
    case BUSINESS_LIST_RECIVED:
      return {
        ...state,
        businessList: action.payload.businessList,
      };
    default:
      return state;
  }
};

export default newsReducer;
