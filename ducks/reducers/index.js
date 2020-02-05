import { combineReducers } from "redux";

import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

const rootReducer = {
  products: productReducer,
  user: userReducer
};

export default combineReducers(rootReducer);
