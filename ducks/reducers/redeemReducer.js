import ApiService from "../../services/apiService";
import { setRedeem, setError, setPosting } from "../actions/redeemActions";
import { actionTypes } from "../types/productTypes";

const initialState = {
  data: "",
  fetching: false,
  requestStatus: null
};

//actions
//action creator
const redeemProduct = productId => dispatch => {
  dispatch(setPosting());
  return ApiService.post("redeem", productId)
    .then(response => {
      dispatch(setRedeem(response));
      return response;
    })
    .catch(err => dispatch(setError(err)));
};
//reducer
const redeemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_POSTING:
      return Object.assign({}, state, {
        fetching: true
      });
    case actionTypes.PRODUCT_REDEEM_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        fetching: false,
        requestStatus: "success"
      });
    case actionTypes.PRODUCT_REDEEM_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        requestStatus: "error"
      });
    default:
      return { ...state };
  }
};

export { initialState, redeemProduct, redeemReducer };
