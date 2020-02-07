import ApiService from "../../services/apiService";
import {
  setProducts,
  setError,
  setFetching,
  setRedeemError
} from "../actions/productActions";
import { actionTypes } from "../types/productTypes";
import { getUser } from "./userReducer";
import { getHistory } from "../actions/userActions";
import { toast } from "react-toastify";

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

const getBody = productId => {
  let body = {
    productId: productId
  };

  console.log(body);
  return body;
};

const redeemProduct = productId => dispatch => {
  dispatch(setFetching());
  return ApiService.post("redeem", getBody(productId))
    .then(response => {
      dispatch(getUser());
      dispatch(getHistory());
      toast.success("compra Exitosa", { position: toast.POSITION.TOP_CENTER });
      return response;
    })
    .catch(err => {
      dispatch(setRedeemError(err));
      toast.warn("No se pudo realizar la compra", {
        position: toast.POSITION.TOP_CENTER
      });
    });
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
    case actionTypes.PRODUCT_REDEEM_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        requestStatus: "error"
      });
    case actionTypes.PRODUCT_SEARCH_FILTER:
      return Object.assign({}, state, {
        data: action.payload,
        fetching: false,
        requestStatus: "success"
      });
    default:
      return { ...state };
  }
};

export { getProducts, productReducer, initialState, redeemProduct };
