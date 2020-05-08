// import {createStore, applyMiddleware} from 'redux'
// // import apiMiddleware from 'Redux/Middleware/api'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { composeWithDevTools} from 'redux-devtools-extension'
// import reducer from './Redux/auth.reducer'

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['auth'],
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const create = () => {
//   const enhancer = composeWithDevTools()
//   let store = createStore(persistedReducer, enhancer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './Redux/news.reducer';

const reducer = combineReducers({
  news: newsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;