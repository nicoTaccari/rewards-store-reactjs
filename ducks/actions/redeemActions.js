import { actionTypes } from "../types/productTypes";

const setRedeem = message => ({
  type: actionTypes.PRODUCT_REDEEM_SUCCESS,
  payload: message
});

const setError = error => ({
  type: actionTypes.PRODUCT_REDEEM_FAILURE,
  payload: error
});

const setPosting = () => ({ type: actionTypes.PRODUCT_POSTING });

export { setError, setPosting, setRedeem };
