import { combineReducers } from 'redux'


const initialState = {
  user: {},
  isAuth: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {},
        isAuth: false,
      };
    default:
      return state;
  }
};


const appRedux = combineReducers({
   auth
})

const reducer = (state, action) => {
  return appRedux(state, action)
}

export default reducer