import ApiService from "./../../../services/apiService";
import { setProducts, setError, setFetching } from "../actions/productActions";
import { actionTypes } from "../types/productTypes";

const initialState = {
  data: [],
  fetching: false,
  requestStatus: null
};

//actions
//action creator
const getProducts = () => dispatch => {
  dispatch(setFetching());
  return ApiService.get("products")
    .then(response => {
      dispatch(setProducts(response));
      return response;
    })
    .catch(err => dispatch(setError(err)));
};
//reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_FETCHING:
      return Object.assign({}, state, {
        fetching: true
      });
    case actionTypes.PRODUCTS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        fetching: false,
        requestStatus: "success"
      });
    case actionTypes.PRODUCTS_FETCH_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        requestStatus: "error"
      });
    default:
      return { ...state };
  }
};

export { getProducts, productReducer };
