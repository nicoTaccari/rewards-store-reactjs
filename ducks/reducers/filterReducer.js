import { setSearchFilter, setOrderFilter } from "../actions/filterActions";
import { actionTypes } from "../types/filterTypes";

const initialState = {
  orderByOptions: [
    { value: "name/ASC", label: "Name" },
    { value: "cost/ASC", label: "Lowest Cost" },
    { value: "cost/DSC", label: "Highest Cost" }
  ],
  orderBy: "name/ASC",
  name: ""
};

const setSearch = name => dispatch => {
  dispatch(setSearchFilter(name));
};

const setOrder = order => dispatch => {
  console.log(order);
  dispatch(setOrderFilter(order));
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_FILTER:
      return Object.assign({}, state, {
        name: action.payload
      });
    case actionTypes.SET_ORDER_FILTER:
      return Object.assign({}, state, {
        orderBy: action.payload
      });
    default:
      return state;
  }
};

export { filterReducer, setSearch, setOrder, initialState };
