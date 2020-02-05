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

const setCredits = message => ({
  type: userActionTypes.USER_ADD_CREDITS_SUCCESS,
  payload: message
});

const setCreditsError = error => ({
  type: userActionTypes.USER_ADD_CREDITS_FAILURE,
  payload: error
});

const getHistory = history => ({
  type: userActionTypes.USER_GET_HISTORY_SUCCESS,
  payload: history
});

const getHistoryError = () => ({
  type: userActionTypes.USER_GET_HISTORY_ERROR,
  payload: []
});

export {
  setError,
  setCredits,
  setCreditsError,
  setFetching,
  setUser,
  getHistory,
  getHistoryError
};
