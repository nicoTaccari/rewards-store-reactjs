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

const setRedeem = message => ({
  type: actionTypes.PRODUCT_REDEEM_SUCCESS,
  payload: message
});

const setRedeemError = error => ({
  type: actionTypes.PRODUCT_REDEEM_FAILURE,
  payload: error
});

const setPosting = () => ({ type: actionTypes.PRODUCT_POSTING });

export {
  setError,
  setFetching,
  setProducts,
  setRedeemError,
  setPosting,
  setRedeem
};
