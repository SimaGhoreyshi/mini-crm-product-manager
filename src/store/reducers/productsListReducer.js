import {
  PRODUCTS_LIST_START,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
} from "../actionTypes";
import { httpFail, httpStart, updateObject } from "../storeUtils";

const initialState = {
  products: [],
  error: null,
  loading: false,
};

const productsListSuccess = (state, action) => {
  return updateObject(state, {
    products: action.result,
    error: null,
    loading: false,
  });
};

export const productsList = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_START:
      return httpStart(state, action);
    case PRODUCTS_LIST_SUCCESS:
      return productsListSuccess(state, action);
    case PRODUCTS_LIST_FAIL:
      return httpFail(state, action);
    default:
      return state;
  }
};
