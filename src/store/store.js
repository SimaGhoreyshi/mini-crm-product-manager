import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { productsList } from "./reducers";

const rootReducer = combineReducers({ productsList });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
