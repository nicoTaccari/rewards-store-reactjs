import { actionTypes } from "../types/productTypes";

const setProducts = products => ({
  type: actionTypes.PRODUCTS_FETCH_SUCCESS,
  payload: products
});

const setError = error => ({
  type: actionTypes.PRODUCTS_FETCH_FAILURE,
  payload: error
});

const setFetching = () => ({ type: actionTypes.PRODUCTS_FETCHING });

export { setError, setFetching, setProducts };
