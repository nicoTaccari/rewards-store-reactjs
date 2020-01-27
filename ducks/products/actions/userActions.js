import { userActionTypes } from "../types/userTypes";

const setUser = user => ({
  type: userActionTypes.USER_FETCH_SUCCESS,
  payload: user
});

const setError = error => ({
  type: userActionTypes.USER_FETCH_FAILURE,
  payload: error
});

const setFetching = () => ({ type: userActionTypes.USER_FETCHING });

export { setError, setFetching, setUser };
