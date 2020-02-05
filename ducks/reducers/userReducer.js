import ApiService from "../../services/apiService";
import {
  setUser,
  setError,
  setFetching,
  getHistory,
  getHistoryError,
  setCredits,
  setCreditsError
} from "../actions/userActions";
import { userActionTypes } from "../types/userTypes";

const getBody = points => {
  let body = {
    amount: points
  };

  return body;
};

const initialState = {
  history: [],
  username: "",
  points: 0,
  fetching: false,
  requestStatus: null
};

//actions
//action creator
const getUser = () => dispatch => {
  dispatch(setFetching());
  return ApiService.get("user/me")
    .then(response => {
      dispatch(setUser(response));
      return response;
    })
    .catch(err => dispatch(setError(err)));
};

const userHistory = () => dispatch => {
  dispatch(setFetching());
  return ApiService.get("user/history")
    .then(response => {
      dispatch(getHistory(response));
      return response;
    })
    .catch(err => dispatch(getHistoryError(err)));
};

const addCredits = points => dispatch => {
  dispatch(setFetching());
  return ApiService.post("user/points", getBody(points))
    .then(response => {
      dispatch(setCredits(response));
      return response;
    })
    .catch(err => dispatch(setCreditsError(err)));
};
//reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.USER_FETCHING:
      return Object.assign({}, state, {
        fetching: true
      });
    case userActionTypes.USER_FETCH_SUCCESS:
      return Object.assign({}, state, {
        username: action.payload.name,
        points: action.payload.points,
        history: action.payload.redeemHistory,
        fetching: false,
        requestStatus: "success"
      });
    case userActionTypes.USER_FETCH_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        requestStatus: "error"
      });
    case userActionTypes.USER_GET_HISTORY_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        history: action.payload
      });
    case userActionTypes.USER_GET_HISTORY_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        requestStatus: "error",
        history: action.payload
      });
    case userActionTypes.USER_ADD_CREDITS_SUCCESS:
      console.log(action.payload);
      return Object.assign({}, state, {
        fetching: false,
        requestStatus: "success",
        points: action.payload["New Points"]
      });
    default:
      return { ...state };
  }
};

export { getUser, userReducer, initialState, userHistory, addCredits };
