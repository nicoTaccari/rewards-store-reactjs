import { combineReducers } from "redux";

import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { redeemReducer } from "./redeemReducer";

const rootReducer = combineReducers({
  productReducer,
  userReducer,
  redeemReducer
});

export { rootReducer };
