import ApiService from "../../services/apiService";
import { setUser, setError, setFetching } from "../actions/userActions";
import { userActionTypes } from "../types/userTypes";

const initialState = {
  data: {},
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
//reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.USER_FETCHING:
      return Object.assign({}, state, {
        fetching: true
      });
    case userActionTypes.USER_FETCH_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        fetching: false,
        requestStatus: "success"
      });
    case userActionTypes.USER_FETCH_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        requestStatus: "error"
      });
    default:
      return { ...state };
  }
};

export { getUser, userReducer };
