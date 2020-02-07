import { combineReducers } from "redux";

import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { filterReducer } from "./filterReducer";

const rootReducer = {
  products: productReducer,
  user: userReducer,
  filters: filterReducer
};

export default combineReducers(rootReducer);
