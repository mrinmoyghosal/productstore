import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import search from './reducers/searchReducer';
import status from './reducers/statusReducer';

export default createStore(
  combineReducers({
    search,
    status,
  }),
  {},
  applyMiddleware(thunk)
)