import axios from "axios";
import { productListApi } from "../../common/apiEndpoints";
import {
  PRODUCTS_LIST_START,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
} from "../actionTypes";
import { httpFailAction, httpStartAction } from "../storeUtils";

const fetchProductsListSuccess = (result) => {
  return {
    type: PRODUCTS_LIST_SUCCESS,
    result,
  };
};

export const fetchProductsList = () => async (dispatch) => {
  dispatch(httpStartAction(PRODUCTS_LIST_START));
  try {
    const res = await axios.get(productListApi);
    dispatch(fetchProductsListSuccess(res.data));
  } catch (error) {
    dispatch(httpFailAction(PRODUCTS_LIST_FAIL, error));
  }
};
