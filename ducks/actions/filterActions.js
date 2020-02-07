import { actionTypes } from "../types/filterTypes";

const setSearchFilter = name => ({
  type: actionTypes.SET_SEARCH_FILTER,
  payload: name
});

const setOrderFilter = order => ({
  type: actionTypes.SET_ORDER_FILTER,
  payload: order
});

export { setOrderFilter, setSearchFilter };
