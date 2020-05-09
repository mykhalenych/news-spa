import { NEWS_LIST_RECIVED, SCIENCE_LIST_RECIVED } from "./news.actions";

const initialState = {
  newsList: [],
  scienceList: []
};
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_LIST_RECIVED:
      return {
        ...state,
        newsList: action.payload.newsList,
      };
    case SCIENCE_LIST_RECIVED:
      return{
        ...state,
        scienceList: action.payload.scienceList
      }  
    default:
      return state;
  }
};

export default newsReducer;